import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({ children, className = '', as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={`max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full ${className}`}>
      {children}
    </Component>
  );
}
