import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'transparent' | 'card';
  priority?: boolean;
}

export default function Logo({ 
  className = '', 
  variant = 'transparent',
  priority = false 
}: LogoProps) {
  const logoSrc = variant === 'card' 
    ? '/logos/cluster-outfits-logo.png' 
    : '/logos/cluster-outfits-transparent.png';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="Cluster Outfits Pvt. Ltd."
        width={248}
        height={88}
        priority={priority}
        className="h-9 sm:h-10 md:h-11 w-auto object-contain select-none"
      />
    </div>
  );
}
