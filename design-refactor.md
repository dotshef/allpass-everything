# 디자인 리팩토링 작업 계획

> 참고 디자인: DiggingCareer (ref-design.md)
> 대상: allpsn.com (Next.js 15 + Tailwind v4)
> 도구: shadcn/ui 도입
> 원칙: **내용(텍스트, 데이터)은 일절 변경하지 않음. 디자인/스타일만 변경.**

---

## Phase 0: 기반 세팅

### 0-1. shadcn/ui 초기화
- `npx shadcn@latest init` 실행
- Tailwind v4 + Next.js 15 호환 설정
- `components/ui/` 디렉토리 생성
- CSS 변수 기반 테마 시스템 구성

### 0-2. 디자인 토큰 정의 (globals.css)
현재 색상이 모든 파일에 하드코딩(`#4655C7`, `#e1582e` 등)되어 있음 → CSS 변수로 통합

```css
:root {
  /* 기존 allpsn 브랜드 컬러를 DiggingCareer 스타일로 재정의 */
  --primary: #4655C7;         /* 브랜드 블루 유지 */
  --primary-dark: #344199;    /* 호버 */
  --accent: #e1582e;          /* 오렌지 유지 */
  --background: #ffffff;
  --foreground: #212121;      /* 거의 블랙 (DiggingCareer 스타일) */
  --muted: #666666;           /* 본문 그레이 */
  --muted-light: #999999;     /* 보조 그레이 */
  --border: #e5e5e5;          /* 테두리 */
  --section-bg: #f5f5f5;      /* 보조 섹션 배경 */
  --card-bg: #ffffff;
  --dark-bg: #1a1e24;         /* 다크 CTA 배너 */
  --kakao: #FEE500;
}
```

### 0-3. 필요 shadcn 컴포넌트 설치
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add accordion     # FAQ용
npx shadcn@latest add navigation-menu
```

---

## Phase 1: 글로벌 스타일 변경

### 1-1. 타이포그래피 리셋
| 항목 | 현재 | 변경 |
|------|------|------|
| 섹션 제목 크기 | `text-4xl` ~ `text-5xl` | 유지하되 `font-bold` + `tracking-tight` 통일 |
| 섹션 제목 색상 | `text-[#4655C7]` (블루) | `text-foreground` (거의 블랙, `#212121`) |
| 서브타이틀 | 없음 | 대제목 위에 작은 블루 텍스트 추가 패턴 도입 |
| 본문 텍스트 | `text-gray-600/700` | `text-muted` 통일 |
| 줄간격 | 기본값 | 제목 `leading-tight`, 본문 `leading-relaxed` |

**핵심 변경**: 현재는 제목이 파란색이지만 → DiggingCareer처럼 **제목은 블랙, 서브타이틀만 블루**로 변경

### 1-2. 여백 체계 통일
| 항목 | 현재 | 변경 |
|------|------|------|
| 섹션 세로 패딩 | `py-16` ~ `py-24` (불규칙) | `py-20 md:py-28` 통일 |
| 콘텐츠 최대 너비 | `max-w-4xl` ~ `max-w-6xl` 혼용 | `max-w-5xl` 기본, 풀-너비 섹션은 별도 |
| 좌우 패딩 | `px-6` | `px-6 md:px-8` |

### 1-3. 배경색 패턴
| 현재 | 변경 |
|------|------|
| `bg-[#f0f2ff]` (연한 파란) | `bg-white` 또는 `bg-[#f5f5f5]` (중립 그레이) |
| `bg-[#f0f4fa]` (연한 파란) | `bg-white` (무채색 기반으로 전환) |

**핵심**: DiggingCareer처럼 90% 무채색 + 10% 블루 포인트 방식으로 전환

---

## Phase 2: 헤더/네비게이션 (NavBar.tsx)

### 현재 상태
- 흰색 배경 + 그림자 (`shadow-sm`) 고정
- 로고: `text-[#4655C7]` 텍스트
- 메뉴 3개: 대표 서비스, 후기 및 합격 사례, 상담 신청
- 모바일: 햄버거 메뉴

### 변경 작업
| 항목 | 변경 내용 |
|------|----------|
| 배경 | 히어로 위에서 **투명** → 스크롤 시 **흰색 + 그림자** 전환 |
| 로고 스타일 | 현재 파란 텍스트 유지하되 Bold 강화, 크기 키움 |
| 메뉴 호버 | 현재 밑줄 → 밑줄 유지 + `transition-all duration-300` |
| 높이 | PC `70px`, 모바일 `48px` 로 재설정 |
| 스크롤 감지 | `useEffect` + `window.addEventListener('scroll')` 추가 |

### 구현 방식
```tsx
const [scrolled, setScrolled] = useState(false);
// 스크롤 시 배경 전환
<nav className={cn(
  "fixed top-0 w-full z-50 transition-all duration-300",
  scrolled ? "bg-white shadow-md" : "bg-transparent"
)}>
```

---

## Phase 3: 홈페이지 (page.tsx) 섹션별 리팩토링

### 3-1. 히어로 섹션
| 항목 | 현재 | 변경 |
|------|------|------|
| 배경 | `bg-[#f0f2ff]` (연한 파란) | **풀-너비 이미지 + 다크 오버레이** |
| 높이 | 콘텐츠에 따라 가변 | `h-[680px] md:h-[544px]` 고정 |
| 제목 색상 | `text-[#4655C7]` | `text-white` (다크 배경 위) |
| 레이아웃 | 텍스트 + 이미지 좌우 배치 | 중앙 정렬 텍스트 오버레이 |

**구조 변경**:
```
현재: [연한 파란 배경 + 제목 + 프로필 이미지]
변경: [풀-너비 배경 이미지 + 다크 오버레이 + 서브타이틀(블루) + 대제목(화이트)]
```

### 3-2. 기업 로고 슬라이더 (HomeCompanySlider)
| 항목 | 현재 | 변경 |
|------|------|------|
| 스타일 | 회색 박스 + 텍스트 태그 (여러 행) | 기업 로고 이미지 1행 자동 스크롤 |
| 배경 | 섹션 배경 따라감 | `bg-white` 독립 바 |

**참고**: 현재 로고 이미지가 없으므로, 기존 텍스트 태그 스타일을 유지하되 1행으로 정리하고, 폰트/색상만 DiggingCareer 톤으로 조정하는 것이 현실적.

### 3-3. Value Proposition 섹션 ("스펙이 부족해서 떨어지는 걸까요?")
| 항목 | 현재 | 변경 |
|------|------|------|
| 제목 색상 | `text-[#4655C7]` | `text-foreground` (블랙) |
| 서브타이틀 | 없음 | 대제목 위에 작은 블루 텍스트 추가 |
| 배경 | `bg-[#f0f2ff]` | `bg-white` |
| 여백 | `py-16` | `py-20 md:py-28` |

### 3-4. 채팅 버블 섹션 (BubblePopAnimation)
| 항목 | 현재 | 변경 |
|------|------|------|
| 버블 색상 | `bg-gray-100` (연한 회색) | `bg-[#4A90D9]` 또는 `bg-primary` (블루 버블) |
| 텍스트 색상 | `text-gray-800` | `text-white` |
| 버블 모양 | `rounded-2xl rounded-tl-none` | `rounded-2xl` (풍선형) |
| 배경 | 현재 배경 | `bg-white` |

### 3-5. Stats 섹션 ("채용 혹한기에도 압도적인 성과")
| 항목 | 현재 | 변경 |
|------|------|------|
| 카드 스타일 | `bg-white shadow-md rounded-xl` | `border border-border rounded-xl` (그림자 → 테두리) |
| 숫자 색상 | `text-[#4655C7]` → 호버시 `#e1582e` | 유지 (포인트 컬러로 유지) |
| 그리드 | `grid-cols-4` | 유지 |

### 3-6. 후기 슬라이더 (HomeTestimonialSlider)
| 항목 | 현재 | 변경 |
|------|------|------|
| 카드 | `bg-white shadow-md rounded-xl` | shadcn `Card` 컴포넌트 사용 |
| 제목 색상 | `text-[#4655C7]` | `text-primary` (CSS 변수) |
| 화살표 버튼 | 직접 구현 | shadcn `Button` variant="outline" |

### 3-7. CTA 섹션 ("합격으로 가는 가장 빠른 길")
| 항목 | 현재 | 변경 |
|------|------|------|
| 배경 | `bg-[#f0f2ff]` | **풀-너비 다크 배경 + 이미지 오버레이** |
| 텍스트 | 파란색 | `text-white` |
| CTA 버튼 | 파란 배경 + 흰 텍스트 | shadcn `Button` + pill shape (`rounded-full`) |

**변경 효과**: 페이지 시작(히어로)과 끝(CTA)이 다크 배경 → 샌드위치 구조

### 3-8. 푸터
| 항목 | 현재 | 변경 |
|------|------|------|
| 배경 | `bg-gray-900` 또는 투명 | `bg-[#1a1e24]` (다크 네이비) |
| 텍스트 | 회색 | `text-[#999]` |
| 구조 | 간단 이메일만 | 이메일 + 소셜 아이콘 (lucide-react 활용) |

---

## Phase 4: 서비스 페이지 (services/page.tsx)

### 4-1. 서비스 카드 (2x2 그리드)
| 항목 | 현재 | 변경 |
|------|------|------|
| 레이아웃 | 순번 리스트 형태 | DiggingCareer처럼 **2x2 그리드 + 이미지 카드** |
| 카드 구조 | 텍스트만 | 블루 제목 + 설명 + 이미지 + 체크리스트 |
| 컴포넌트 | 직접 div | shadcn `Card` 사용 |

### 4-2. 비교 섹션 (실패/성공 사례)
| 항목 | 현재 | 변경 |
|------|------|------|
| 스타일 | `bg-red-50` / `bg-green-50` 배경 | 테두리 기반 카드 + 색상 포인트 |
| 구분 | 빨강/초록 배경 | 상단 바 색상으로 구분 (DiggingCareer Before&After 참고) |

### 4-3. FAQ 섹션
| 항목 | 현재 | 변경 |
|------|------|------|
| 구조 | 카드 나열 (펼쳐진 상태) | shadcn `Accordion` (접었다 펴기) |
| 스타일 | `bg-[#f7f9ff] shadow-md` | `border-b border-border` (미니멀) |

### 4-4. 프로세스 스텝
| 항목 | 현재 | 변경 |
|------|------|------|
| 구조 | 순번 리스트 | 3컬럼 스텝 카드 ("01.", "02.", "03.") |
| 카드 스타일 | 없음 | `border border-border rounded-xl p-8` |

---

## Phase 5: About 페이지 (about/page.tsx)

### 5-1. 프로필 섹션
| 항목 | 현재 | 변경 |
|------|------|------|
| 배경 | `from-[#1a202c] via-[#2d3748] to-[#4a5568]` 그라디언트 | `bg-[#1a1e24]` 단색 (DiggingCareer 톤) |
| 레이아웃 | 프로필 이미지 + 텍스트 | 유지하되 여백 확대 |

### 5-2. 실적 카드
| 항목 | 현재 | 변경 |
|------|------|------|
| 카드 | `bg-white shadow-md` | shadcn `Card` + `border` 스타일 |
| 그리드 | 4열 | 유지 |

---

## Phase 6: Contact 페이지 (contact/page.tsx)

### 6-1. CTA 버튼
| 항목 | 현재 | 변경 |
|------|------|------|
| 카카오톡 버튼 | 직접 스타일 | shadcn `Button` 커스텀 variant |
| 채널 버튼들 | 직접 스타일 | shadcn `Button` variant="outline" |

### 6-2. FAQ
- services 페이지와 동일하게 shadcn `Accordion` 적용

---

## Phase 7: Testimonials 페이지 (testimonials/page.tsx)

### 7-1. 후기 카드
| 항목 | 현재 | 변경 |
|------|------|------|
| 카드 | 직접 div + shadow | shadcn `Card` |
| 별점 | `text-yellow-400` 텍스트 "★" | lucide-react `Star` 아이콘 |
| 더보기 버튼 | 직접 스타일 | shadcn `Button` variant="outline" |

---

## Phase 8: 공통 컴포넌트 정리

### 8-1. 섹션 헤더 컴포넌트 (신규)
모든 섹션에서 반복되는 **서브타이틀 + 대제목** 패턴을 컴포넌트화:

```tsx
// components/SectionHeader.tsx
interface SectionHeaderProps {
  subtitle?: string;    // 블루 작은 텍스트
  title: string;        // 블랙 큰 제목
  centered?: boolean;
}
```

### 8-2. 플로팅 상담 버튼 (stickyFooterBanner.tsx)
| 항목 | 현재 | 변경 |
|------|------|------|
| 스타일 | 이미지 배너 | 아이콘 + 텍스트 원형 버튼 (DiggingCareer 참고) |
| 위치 | `bottom-6 right-6` | 유지 |

### 8-3. 애니메이션 컴포넌트
- `FadeInAnimation`, `BubblePopAnimation` → 로직 유지, 스타일만 조정
- 스크롤 시 fade-in + slide-up 효과는 DiggingCareer와 동일하므로 유지

---

## 작업 순서 (권장)

```
Phase 0 → 1 → 2 → 3 → 8 → 4 → 5 → 6 → 7
```

| 순서 | Phase | 작업 | 예상 난이도 |
|------|-------|------|------------|
| 1 | Phase 0 | shadcn 초기화 + 디자인 토큰 | 낮음 |
| 2 | Phase 1 | 글로벌 스타일 (타이포, 여백, 배경색) | 낮음 |
| 3 | Phase 2 | 헤더 투명→화이트 전환 | 중간 |
| 4 | Phase 3 | 홈페이지 섹션별 리팩토링 | 높음 (가장 큰 작업) |
| 5 | Phase 8 | SectionHeader 등 공통 컴포넌트 | 낮음 |
| 6 | Phase 4 | 서비스 페이지 | 중간 |
| 7 | Phase 5 | About 페이지 | 낮음 |
| 8 | Phase 6 | Contact 페이지 | 낮음 |
| 9 | Phase 7 | Testimonials 페이지 | 낮음 |

---

## 변경하지 않는 것 (원칙)

- 모든 텍스트 내용 (제목, 본문, 후기 등)
- 데이터 파일 (`src/data/*`)
- 페이지 라우팅 구조 (`/`, `/about`, `/services`, `/contact`, `/testimonials`)
- SEO 메타데이터
- 기능 로직 (슬라이더, 애니메이션, 동적 로딩)
- Vercel 배포 설정
- 폰트 (Pretendard 유지)

## 핵심 디자인 전환 요약

```
[현재]                          →  [변경 후]
파란색 제목                      →  블랙 제목 + 블루 서브타이틀
연한 파란 배경 (#f0f2ff)         →  화이트 / 라이트 그레이 (#f5f5f5)
그림자 카드 (shadow-md)          →  테두리 카드 (border) 또는 shadcn Card
하드코딩 색상                    →  CSS 변수 (디자인 토큰)
고정 흰색 헤더                   →  투명 → 화이트 전환 헤더
연한 파란 CTA 배경               →  풀-너비 다크 배경 CTA 배너
직접 구현 UI                     →  shadcn/ui 컴포넌트
```
