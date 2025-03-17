import cn from '@/utils/cn';
import { HTMLAttributes } from 'react';

type FormTitle = HTMLAttributes<HTMLHeadingElement>;

export function FormTitle({ children, className, ...rest }: FormTitle) {
  return (
    <h1
      className={cn(
        "relative z-10 mx-0 mt-4 font-spectral text-5xl after:absolute after:bottom-[5px] after:left-[-5px] after:z-[-1] after:block after:h-6 after:w-6 after:rounded after:bg-[#fb1] after:content-['']",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}
