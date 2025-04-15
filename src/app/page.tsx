import Image from "next/image";
import Header from "./components/header/Header";
import CustomLink from "./components/link/CustomLink";
import Dropdow from "./components/dropdown/Dropdown";
import Carousel from "./components/carousel/Carousel";

export default function Home() {
  return (
   <>
    <Header
      classname="flex flex-row flex-wrap justify-around items-center w-full h-16 bg-black"
    >
      <CustomLink 
        href="/"
        className="flex justify-center items-center h-full px-4"
      >
        <Image
          src="/images/logo-header-2.png"
          alt="Logo CME"
          width={0}
          height={0}
          sizes="100vw"
          className="h-10 w-auto object-contain"
          priority
        />
      </CustomLink>
      <nav
        className="ml flex flex-row items-center text-base"
      >
          <ul
            className="flex items-center gap-6 font-henderson-semi-bold text-white"
          >
            <li><CustomLink href="/igreja">Igreja</CustomLink></li>
            <li><CustomLink href="/doacao">Doação</CustomLink></li>
            <li><CustomLink href="/ao-vivo">Ao vivo</CustomLink></li>
            <li><CustomLink href="/mural">Mural de orações</CustomLink></li>
          </ul>
          <Dropdow />
      </nav>
    </Header>
    <Carousel />
   </>
  );
}
