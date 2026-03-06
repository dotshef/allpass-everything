"use client";

export default function FreeContents() {
  return (
    <div>
      <div className="space-y-4 mb-8">
        <button
          onClick={() =>
            window.open(
              "https://blog.naver.com/pass_everything/223755974500",
              "_blank",
            )
          }
          className="w-3/4 mx-auto bg-white border border-border text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition flex items-center justify-center gap-3 hover:cursor-pointer"
        >
          <img
            src="/icons/naver_blog.svg"
            alt="네이버 블로그 아이콘"
            className="w-6 h-6 object-contain"
          />
          네이버 블로그에서 취업 팁 보기
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.instagram.com/allpass_everything/",
              "_blank",
            )
          }
          className="w-3/4 mx-auto bg-white border border-border text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition flex items-center justify-center gap-3 hover:cursor-pointer"
        >
          <img
            src="/icons/instagram.webp"
            alt="인스타그램 아이콘"
            className="w-6 h-6 object-contain"
          />
          인스타그램에서 취업 팁 보기
        </button>

        <button
          onClick={() =>
            window.open("https://www.threads.net/@allpass_everything", "_blank")
          }
          className="w-3/4 mx-auto bg-white border border-border text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition flex items-center justify-center gap-3 hover:cursor-pointer"
        >
          <img
            src="/icons/threads.png"
            alt="스레드 아이콘"
            className="w-6 h-6 object-contain"
          />
          스레드에서 취업 팁 보기
        </button>
      </div>
    </div>
  );
}
