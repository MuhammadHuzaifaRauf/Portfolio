import React from 'react'

export default function SocialLinks() {
  return (
    <article className="flex flex-col gap-8">
    <header className="flex w-full flex-row justify-between gap-2">
      <h3 className="text-lg text-neutral-100">Get in touch</h3>
    </header>
    <p>
      Email me at{" "}
      <a
        href="mailto:mhuzaifarauf13@gmail.com"
        className="hover:text-neutral-100 cursor-pointer"
        rel="noreferrer"
        target="_blank"
      >
       mhuzaifarauf13@gmail.com
        <span className="sr-only">mhuzaifarauf13@gmail.comlink</span>
      </a>{" "}
      or follow me via my social links.
    </p>

    <ul role="list" className="flex flex-row gap-2">
      <li>
        <a
          href="https://www.linkedin.com/in/muhammad-huzaifa-rauf-b5ba032a7/"
          className="hover:text-neutral-100 cursor-pointer"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn<span className="sr-only">X link</span>
        </a>
      </li>

      <li>/</li>
      <li>
        <a
          href="https://github.com/MuhammadHuzaifaRau"
          className="hover:text-neutral-100 cursor-pointer"
          rel="noreferrer"
          target="_blank"
        >
          Github
          <span className="sr-only">Github link</span>
        </a>
      </li>
    </ul>
  </article>
  )
}
