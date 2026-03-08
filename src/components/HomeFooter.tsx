import { EMAIL } from "@/data/constants";

export default function HomeFooter() {
  return (
    <footer className="bg-dark-bg text-dark-text py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold text-white mb-2">대기업김과장</p>
          <p className="text-sm">이메일: {EMAIL}</p>
        </div>
        <p className="text-xs">
          COPYRIGHT 2025. 대기업김과장 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
