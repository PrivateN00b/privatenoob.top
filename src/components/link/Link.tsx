import * as stylex from '@stylexjs/stylex';

export function Link({ style, href, children }: { style: Readonly<{}>[], href: string; children: React.ReactNode }) {
  return (
    <a {...stylex.props(style)} href={href}>
      {children}
    </a>
  );
}
