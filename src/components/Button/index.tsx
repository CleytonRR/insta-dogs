import cn from '@/utils/cn';
import { ComponentProps } from 'react';

// HTMLAttributes - não tinha o disabled.

type ButtonProps = ComponentProps<'button'>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'box-border min-w-32 rounded border-0 bg-[#fb1] px-[1.rem] py-[0.8rem] font-spectral text-base text-[#764701] transition-all hover:shadow-[0px_0px_0px_3px_#fea,0px_0px_0px_4px_#fb1] hover:outline-none focus:outline-none disabled:cursor-wait disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
};
