import { SocialLink } from '@/app/types/types';
import React from 'react';



const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-huzaifa-rauf-b5ba032a7/',
  },
  {
    name: 'Github',
    url: 'https://github.com/MuhammadHuzaifaRauf',
  },
];

const HeroSection: React.FC = () => (
  <article className="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-12">
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl text-neutral-100">Hi, I’m Huzaifa 👋</h1>

      <h2 className="w-auto max-w-[60ch] leading-6">
        I'm a{' '}
        <strong className="font-normal text-orange-500">
          software developer
        </strong>{' '}
        with over{' '}
        <strong className="font-normal text-orange-500">1.5 years</strong> of
        web experience. I have experience in{' '}
        <strong className="font-normal text-orange-500">
          TypeScript, React, Next.js, Node.js, and MongoDB
        </strong>
        .
      </h2>

      <ul role="list" className="flex flex-row gap-2">
        {socialLinks.map((link, index) => (
          <React.Fragment key={index}>
            <li>
              <a
                href={link.url}
                className="hover:text-neutral-100 cursor-pointer"
                rel="noreferrer"
                target="_blank"
              >
                {link.name}
                <span className="sr-only">{`${link.name} link`}</span>
              </a>
            </li>
            {index < socialLinks.length - 1 && <li>/</li>}
          </React.Fragment>
        ))}
      </ul>
    </div>
  </article>
);

export default HeroSection;
