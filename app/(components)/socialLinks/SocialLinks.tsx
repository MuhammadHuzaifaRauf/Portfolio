import { socialLinks } from '@/app/utils/helpers';
import React from 'react';

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
          <span className="sr-only">mhuzaifarauf13@gmail.com link</span>
        </a>{" "}
        or follow me via my social links.
      </p>

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
    </article>
  );
}
