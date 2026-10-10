import React, { forwardRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type ButtonVariant =
  | 'primary'       // Solid dark (#141414) with right arrow (Image 1 left)
  | 'dark'          // Alias for primary
  | 'blue'          // Solid brand blue with right arrow (Image 2 left)
  | 'coral'         // Solid brand coral with right arrow
  | 'teal'          // Solid brand teal/green with right arrow
  | 'white'         // Solid white with dark text
  | 'outline-white' // Crisp white border on dark bg, hover white fill
  | 'outline-dark'  // Crisp outline on light surface, dark text (Image 1 right)
  | 'outline-light' // Crisp outline on dark surface, white text (Image 2 right)
  | 'outline';      // Default alias for outline-light

export type ButtonSize = 'sm' | 'default' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  href?: string;
  external?: boolean;
  as?: 'button' | 'a' | 'span' | 'div';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Global Button Component for Cluster Outfits
 * 
 * Centralized design token based on architectural luxury styling:
 * - Crisp rectangular geometry (rounded-[2px])
 * - Uppercase bold tracking (font-manrope tracking-[0.18em])
 * - Smooth hover and active states
 * - Trailing arrow indicator for primary actions
 * 
 * Future style updates across the entire website can be made directly in this file.
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      showArrow,
      href,
      external = false,
      as,
      icon,
      children,
      className = '',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    // Determine whether to display the trailing arrow.
    // By default, solid buttons display the arrow, outline buttons do not (matching user reference images).
    const isSolid =
      variant === 'primary' ||
      variant === 'dark' ||
      variant === 'blue' ||
      variant === 'coral' ||
      variant === 'teal' ||
      variant === 'white';

    const shouldShowArrow = showArrow !== undefined ? showArrow : isSolid;

    // Base structural styling
    const baseClasses =
      'group inline-flex items-center justify-center font-manrope font-bold uppercase tracking-[0.18em] transition-all duration-200 select-none active:scale-[0.98] cursor-pointer rounded-none';

    // Size variants
    const sizeClasses: Record<ButtonSize, string> = {
      sm: 'px-5 py-2.5 text-[11px] gap-2',
      default: 'px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-[12.5px] gap-2.5 sm:gap-3',
      lg: 'px-9 py-4 sm:py-4.5 text-[13px] gap-3',
    };

    // Color & border variants
    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        'bg-[#141414] hover:bg-black text-white border border-[#141414] shadow-sm hover:shadow-md',
      dark:
        'bg-[#141414] hover:bg-black text-white border border-[#141414] shadow-sm hover:shadow-md',
      blue:
        'bg-cluster-blue hover:bg-[#0a5670] text-white border border-cluster-blue shadow-sm hover:shadow-md',
      coral:
        'bg-cluster-coral hover:bg-[#c93920] text-white border border-cluster-coral shadow-sm hover:shadow-md',
      teal:
        'bg-cluster-teal hover:bg-[#1aa67f] text-white border border-cluster-teal shadow-sm hover:shadow-md',
      white:
        'bg-white hover:bg-neutral-100 text-[#141414] border border-white shadow-sm hover:shadow-md',
      'outline-white':
        'bg-transparent hover:bg-white hover:text-[#141414] text-white border border-white transition-all',
      'outline-dark':
        'bg-transparent hover:bg-black/[0.04] text-[#141414] border border-[#d2d2cb] hover:border-[#141414]',
      'outline-light':
        'bg-transparent hover:bg-white/[0.08] text-white border border-white/25 hover:border-white/50',
      outline:
        'bg-transparent hover:bg-white/[0.08] text-white border border-white/25 hover:border-white/50',
    };

    const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

    const arrowIcon = shouldShowArrow && (
      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
    );

    const content = (
      <>
        <span>{children}</span>
        {icon && <span className="shrink-0">{icon}</span>}
        {arrowIcon}
      </>
    );

    if (as === 'span') {
      return (
        <span
          ref={ref as any}
          className={combinedClasses}
          {...(rest as any)}
        >
          {content}
        </span>
      );
    }

    if (as === 'div') {
      return (
        <div
          ref={ref as any}
          className={combinedClasses}
          {...(rest as any)}
        >
          {content}
        </div>
      );
    }

    if (href) {
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
            {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClasses}
          {...(rest as any)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={combinedClasses}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
