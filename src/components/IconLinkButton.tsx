"use client";

import Image from "next/image";

interface IconLinkButtonProps {
  href: string;
  icon: string;
  alt: string;
  label: string;
}

export default function IconLinkButton({ href, icon, alt, label }: IconLinkButtonProps) {
  return (
    <button
      onClick={() => window.open(href, "_blank")}
      className="bg-white border border-border text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition flex items-center justify-center gap-3 cursor-pointer"
    >
      <Image
        src={icon}
        alt={alt}
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
      {label}
    </button>
  );
}
