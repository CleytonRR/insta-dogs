import cn from '@/utils/cn';
import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  label: string;
  error?: string;
};

export const Input = ({ className, error, label, ...props }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block pb-2 text-base leading-[1]" htmlFor={props.name}>
        {label}
      </label>
      <input
        className={cn(
          'round-[0.4rem] block w-full border border-[#eee] bg-[#eee] p-[0.8rem] text-base transition-all hover:border-[#fb1] hover:bg-white hover:shadow-[0px_0px_0px_3px_#fea] hover:outline-none focus:border-[#fb1] focus:bg-white focus:shadow-[0px_0px_0px_3px_#fea] focus:outline-none',
          className,
        )}
        id={props.name}
        type="text"
        {...props}
      />

      {error && <p className="mt-1 text-sm text-[#f31]">{error}</p>}
    </div>
  );
};
