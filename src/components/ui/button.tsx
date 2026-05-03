import Link from 'next/link';
import { ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'link';
type Size = 'md' | 'lg';

const BASE = 'inline-flex items-center justify-center gap-2 font-medium transition duration-200 ease-out-quint focus-visible:outline-none';

const SIZE: Record<Size, string> = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-14 w-900:h-16 px-7 w-900:px-9 text-base w-900:text-lg',
};

const VARIANT: Record<Variant, string> = {
  primary:
    'bg-ink text-paper border border-ink hover:bg-accent hover:border-accent rounded-full',
  ghost:
    'bg-transparent text-ink border border-graphite-300 hover:border-ink rounded-full',
  link:
    'bg-transparent text-ink underline underline-offset-4 decoration-graphite-300 hover:decoration-accent hover:text-accent px-0 h-auto',
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface AsLink extends CommonProps {
  href: string;
  external?: boolean;
  onClick?: never;
}

interface AsButton extends CommonProps {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

type Props = AsLink | AsButton;

export default function Button(props: Props) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
  } = props;

  const cls = `${BASE} ${VARIANT[variant]} ${variant !== 'link' ? SIZE[size] : ''} ${className}`;

  if ('href' in props && props.href !== undefined) {
    if (props.external || props.href.startsWith('http') || props.href.startsWith('mailto:') || props.href.startsWith('tel:')) {
      return (
        <a href={props.href} className={cls} target={props.external ? '_blank' : undefined} rel={props.external ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cls}
    >
      {children}
    </button>
  );
}
