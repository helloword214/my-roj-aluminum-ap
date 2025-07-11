declare module 'react-anchor-link-smooth-scroll' {
  import * as React from 'react';

  interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    offset?: string | number;
  }

  const AnchorLink: React.FC<AnchorLinkProps>;

  export default AnchorLink;
}
