import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type customLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
}

export default function CustomLink({ href, children, className, ...props }: customLinkProps) {
  return (
    <Link
      href={href}
      className={`${className} hover:text-primary-light decoration-2 transition-all duration-300 ease-in-out`}
      {...props}
    >
      {children}
    </Link>
  )
}