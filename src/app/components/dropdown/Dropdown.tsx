"use client";
import { useState } from "react";
import ItemMenu from "../item-menu/ItemMenu";

import { BsChevronCompactDown, BsFire, BsPlayCircle } from "react-icons/bs";
import { BiSolidBible } from "react-icons/bi";
import { PiBookOpenText } from "react-icons/pi";
import { FaCross } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { FaBookOpenReader, FaPeopleRoof } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";

export default function Dropdow() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div
      className="relative ml-5"
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 font-henderson-semi-bold text-white"
      >
        Mais <BsChevronCompactDown className={`w-4 h-4 ml-1 transition-transform ${ open && "rotate-180" }`}/>
      </button>
      {
        open && (
          <nav
            className="absolute top-full right-0 mt-5 z-50"
          >
            <div
              className="absolute top-2 right-5 -translate-y-[90%] w-0 h-0 border-l-8 border-r-8 border-b-[10px] border-l-transparent border-r-transparent border-b-primary-default"
            />
            <ul
              className="mt-2 bg-primary-default rounded-lg shadow-lg p-4 grid grid-cols-2 gap-x-8 gap-y-4 min-w-[480px]"
            >
              <li>
                <ItemMenu href="/ministerios" label="Ministérios" icon={BsFire}/>
              </li>
              <li>
                <ItemMenu href="/noticias" label="Igreja" icon={PiBookOpenText}/>
              </li>
              <li>
                <ItemMenu href="/biblia" label="Bíblia" icon={BiSolidBible}/>
              </li>
              <li>
                <ItemMenu href="/devocional" label="Devocional" icon={FaCross}/>
              </li>
              <li>
                <ItemMenu href="/publicacoes" label="Publicações" icon={TiNews}/>
              </li>
              <li>
                <ItemMenu href="/plano-leitura" label="Plano de Leitura" icon={FaBookOpenReader}/>
              </li>
              <li>
                <ItemMenu href="/mensagens" label="Mensagens" icon={BsPlayCircle}/>
              </li>
              <li>
                <ItemMenu href="/celulas" label="Células" icon={FaPeopleRoof}/>
              </li>
              <li>
                <ItemMenu href="/estudo-biblico" label="Estudo bíblico" icon={FaPeopleRoof}/>
              </li>
              <li>
                <ItemMenu href="/eventos" label="Eventos" icon={IoCalendarOutline}/>
              </li>
            </ul>
          </nav>
        )
      }
    </div>
  )
}