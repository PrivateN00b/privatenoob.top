import * as stylex from '@stylexjs/stylex';

export function Link({ style, href, children }: { style: Readonly<{}>[], href: string; children: React.ReactNode }) {
  // const pageContext = usePageContext();
  // const { urlPathname } = pageContext;
  // const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);

  return (
    <a {...stylex.props(style)} href={href}>
      {children}
    </a>
  );
}
