import Link from 'next/link';
import clsx from 'clsx';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'filled' | 'outline';
};

export default function ButtonLink({
  href,
  children,
  variant = 'filled',
}: ButtonLinkProps) {
  const base = 'px-6 py-3 rounded-md font-medium transition-colors';

  const styles = {
    filled: 'bg-white text-primary hover:bg-gray-100',
    outline:
      'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary',
  };

  return (
    <Link href={href} className={clsx(base, styles[variant])}>
      {children}
    </Link>
  );
}
