import React, { FC } from 'react';
import { Icon, IconName } from '@grafana/ui';

export interface FooterLink {
  text: string;
  id?: string;
  icon?: IconName;
  url?: string;
  target?: string;
}

export let getFooterLinks = (): FooterLink[] => {
  const currentYear = new Date().getFullYear();

  return [
    {
      // Removed brand name from the Help menu as requested.
      text: `AKMind Solution © ${currentYear} All rights reserved.`,
      // no url so it renders as plain text in the menu
    },
  ];
};

export let getVersionLinks = (): FooterLink[] => {
  // Provide a version entry that will show up in the Help menu.
  return [
    {
      text: 'AKMind v1.0.1',
      id: 'AKMind-version',
    },
  ];
};

export const Footer: FC = React.memo(() => {
  const links = getFooterLinks();

  return (
    <footer className="footer">
      <div className="text-center" style={{ padding: '10px 0', color: 'var(--text-color)', opacity: 0.8 }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {links.map((link) => (
            <li key={link.text}>
              {link.url ? (
                <a
                  href={link.url}
                  target={link.target}
                  rel="noopener noreferrer"
                  id={link.id}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {link.icon && <Icon name={link.icon} />} {link.text}
                </a>
              ) : (
                <span id={link.id} style={{ color: 'inherit' }}>
                  {link.icon && <Icon name={link.icon} />} {link.text}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
