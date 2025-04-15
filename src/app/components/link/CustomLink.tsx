import Link from "next/link";

type customLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function CustomLink({ href, children, className, ...props }: customLinkProps) {
  return (
    <Link
      href={href}
      className={`${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}