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
  const logoSrc = '/logos/cluster-main.png';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="Cluster - The Best You Choose"
        width={320}
        height={80}
        priority={priority}
        className="h-9 sm:h-10 md:h-11 w-auto object-contain select-none"
      />
    </div>
  );
}
