import { forwardRef, ForwardedRef } from 'react';
import { Link } from 'react-router-dom';

interface RouterLinkProps {
  href: string;
  [key: string]: unknown;
}

const RouterLink = forwardRef(({ href, ...other }: RouterLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => <Link ref={ref} to={href} {...other} />);

export default RouterLink;
