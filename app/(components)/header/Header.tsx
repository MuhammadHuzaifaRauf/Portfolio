import { links } from "@/app/utils/helpers";
import React from "react";

export default function Header() {
  return (
    <header className="z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between">
      <a
        href="mailto: mhuzaifarauf13@gmail.com"
        className="hover:text-neutral-100"
      >
        mhuzaifarauf13@gmail.com
      </a>

      <nav role="navigation">
        <ul role="list" className="flex flex-row gap-2">
          <li>
            <a href="/" className="hover:text-neutral-100 text-neutral-100">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/posts" className="hover:text-neutral-100">
              Posts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
