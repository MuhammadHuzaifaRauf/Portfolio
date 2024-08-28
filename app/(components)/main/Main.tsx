import React from "react";
import SocialLinks from "../socialLinks/SocialLinks";

export default function Main() {
  return (
      <main className="flex flex-col gap-20">
          <article className="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-12">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl text-neutral-100">Hi, I’m Huzaifa 👋</h1>

              <h2 className="w-auto max-w-[60ch] leading-6">
                I'm a{" "}
                <strong className="font-normal text-orange-500">
                  software developer
                </strong>{" "}
                with over{" "}
                <strong className="font-normal text-orange-500">1.5 years</strong>{" "}
                of web experience, I've experience in{" "}
                <strong className="font-normal text-orange-500">
                  Typescript, React, Nextjs, Nodejs and MongoDB
                </strong>
                .
              </h2>

              <ul role="list" className="flex flex-row gap-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/muhammad-huzaifa-rauf-b5ba032a7/"
                    className="hover:text-neutral-100 cursor-pointer"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Linkedin<span className="sr-only">X link</span>
                  </a>
                </li>

                <li>/</li>
                <li>
                  <a
                    href="https://github.com/MuhammadHuzaifaRauf"
                    className="hover:text-neutral-100 cursor-pointer"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github
                    <span className="sr-only">Github link</span>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className="flex flex-col gap-8">
            <header className="flex w-full flex-row justify-between gap-2">
              <h3 className="text-lg text-neutral-100">Latest posts</h3>
              <a
                href="/posts"
                className="hover:text-neutral-100 cursor-pointer underline decoration-dashed underline-offset-8"
                target="_self"
                rel="noreferrer"
              >
                See all posts
                <span className="sr-only">See all posts link</span>
              </a>
            </header>
            <p>Soon, stay connected 👀...</p>

            <section className="flex flex-col gap-4 md:flex-row md:flex-wrap"></section>
          </article>

          <article className="flex flex-col gap-8">
            <header className="flex w-full flex-row justify-between gap-2">
              <h3 className="text-lg text-neutral-100">
                Selected projects (0)
              </h3>
            </header>
            <p>Oops, I must work^^^^^</p>

            <section className="flex flex-col gap-4"></section>
          </article>

         <SocialLinks />
        </main> 
  );
}
