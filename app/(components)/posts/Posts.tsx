import { SectionProps } from '@/app/types/types';
import React, { ReactNode } from 'react';



const Section: React.FC<SectionProps> = ({ title, link, linkText, description, children }) => (
  <article className="flex flex-col gap-8">
    <header className="flex w-full flex-row justify-between gap-2">
      <h3 className="text-lg text-neutral-100">{title}</h3>
      {link && linkText && (
        <a
          href={link}
          className="hover:text-neutral-100 cursor-pointer underline decoration-dashed underline-offset-8"
          target="_self"
          rel="noreferrer"
        >
          {linkText}
          <span className="sr-only">{`${linkText} link`}</span>
        </a>
      )}
    </header>
    <p>{description}</p>
    <section className="flex flex-col gap-4 md:flex-row md:flex-wrap">
      {children}
    </section>
  </article>
);

export default function Posts() {
  return (
    <>
      <Section
        title="Latest posts"
        link="/posts"
        linkText="See all posts"
        description="Soon, stay connected 👀..."
      />
      <Section
        title="Selected projects (0)"
        description="Oops, I must work^^^^^"
      />
    </>
  );
}
