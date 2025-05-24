import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Links({ href, children }: Props) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://');

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-0.5"
      >
        {children} <ExternalLink className="w-3.5 h-3.5 mr-1" />
      </a>
    );
  }

  return <Link href={href}>{children}</Link>;
}
