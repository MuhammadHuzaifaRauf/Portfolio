import Image from "next/image";
import Main from "./(components)/main/Main";
import Header from "./(components)/header/Header";

export default function Home() {
  return (
    <>
    <Header />
      <body
        className="mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 bg-neutral-950 px-10  text-sm text-neutral-400 md:gap-20 md:py-16"
        monica-version="6.0.0"
        monica-id="ofpnmcalabcbjgholdjcjblkibolbppb"
      >
      
        <div className="fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-orange-500 blur-[150px] md:blur-[350px] opacity-50 left-0 top-0"></div>
        <div className="fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-violet-500 blur-[150px] md:blur-[350px] opacity-50 right-0 bottom-0"></div>

        {/* <main className="flex flex-col gap-20">
          <article className="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-12">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl text-neutral-100">Hi, I’m Talha 👋</h1>

              <h2 className="w-auto max-w-[60ch] leading-6">
                I'm a{" "}
                <strong className="font-normal text-orange-500">
                  software developer
                </strong>{" "}
                with over{" "}
                <strong className="font-normal text-orange-500">5 years</strong>{" "}
                of web experience, I've experience in{" "}
                <strong className="font-normal text-orange-500">
                  Typescript, React, Nextjs, Nodejs and MongoDB
                </strong>
                .
              </h2>

              <ul role="list" className="flex flex-row gap-2">
                <li>
                  <a
                    href="https://twitter.com/groovierhen"
                    className="hover:text-neutral-100 cursor-pointer"
                    rel="noreferrer"
                    target="_blank"
                  >
                    X<span className="sr-only">X link</span>
                  </a>
                </li>

                <li>/</li>
                <li>
                  <a
                    href="https://github.com/GroovierHen"
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

          <article className="flex flex-col gap-8">
            <header className="flex w-full flex-row justify-between gap-2">
              <h3 className="text-lg text-neutral-100">Get in touch</h3>
            </header>
            <p>
              Email me at{" "}
              <a
                href="mailto:talhamughal600@gmail.com"
                className="hover:text-neutral-100 cursor-pointer"
                rel="noreferrer"
                target="_blank"
              >
                talhamughal600@gmail.com
                <span className="sr-only">talhamughal600@gmail.com link</span>
              </a>{" "}
              or follow me via my social links.
            </p>

            <ul role="list" className="flex flex-row gap-2">
              <li>
                <a
                  href="https://twitter.com/groovierhen"
                  className="hover:text-neutral-100 cursor-pointer"
                  rel="noreferrer"
                  target="_blank"
                >
                  X<span className="sr-only">X link</span>
                </a>
              </li>

              <li>/</li>
              <li>
                <a
                  href="https://github.com/GroovierHen"
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
        </main> */}

        <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
          <section id="shadow-host-companion"></section>
        </div>
        <div id="monica-content-root" className="monica-widget"></div>
      </body>
      <Main />
    </>
  );
}
