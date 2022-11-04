import * as React from 'react';
import cn from 'classnames';
import {ExternalLink} from './ExternalLink';
import NextLink from 'next/link';

export default function NavLink({href, children, isActive}) {
  const classes = cn(
    {
      'text-link border-link dark:text-link-dark dark:border-link-dark font-bold':
        isActive,
    },
    {'border-transparent': !isActive},
    'inline-flex w-full items-center border-b-2 justify-center text-base leading-9 px-3 py-0.5 hover:text-link dark:hover:text-link-dark whitespace-nowrap'
  );

  if (href.startsWith('https://')) {
    return (
      <ExternalLink href={href} className={classes}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <NextLink legacyBehavior href={href}>
      <a className={classes}>{children}</a>
    </NextLink>
  );
}

