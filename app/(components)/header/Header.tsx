import { links } from "@/app/utils/helpers";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-around mx-auto mt-10 items-center p-4 text-white">
      <div className="text-[#A3A3A3] hover:text-neutral-100">
        <a href="mailto:mhuzaifarauf13@gmail.com">mhuzaifarauf13@gmail.com</a>
      </div>
      <div className="flex text-[#A3A3A3] space-x-2">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a href={link.href} className="hover:text-neutral-100 px-2">
              {link.label}
            </a>
            {index < links.length - 1 && "/"}
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}
