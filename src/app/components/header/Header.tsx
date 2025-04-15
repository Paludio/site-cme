type HeaderProps = {
  children: React.ReactNode;
  classname?: string;
}

export default function Header({
  children,
  classname
} : HeaderProps) {
  return (
    <header
      className={`${classname}`}
    >
      {children}
    </header>
  )
}