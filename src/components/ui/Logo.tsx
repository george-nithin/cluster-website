import React from 'react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136 136" className="w-9 h-9 flex-shrink-0">
        <path d="M 0 32 H 64 V 64 H 32 V 96 H 0 Z" fill="#FF8A65" />
        <path d="M 72 0 H 104 V 32 H 136 V 64 H 72 Z" fill="#0E7293" />
        <path d="M 104 72 H 136 V 136 H 72 V 104 H 104 Z" fill="#22C195" />
      </svg>
      
      {/* Text Group */}
      <div className="flex flex-col justify-center">
        <div className="flex items-start">
          <span className="text-[28px] font-bold tracking-tight text-cluster-text leading-[0.85]">
            cluster
          </span>
          <span className="text-[10px] font-normal leading-none ml-[1px]">®</span>
        </div>
        <span className="text-[7.5px] font-bold tracking-[0.24em] text-cluster-text leading-none mt-1.5 ml-[2px]">
          THE BEST YOU CHOOSE
        </span>
      </div>
    </div>
  );
}
