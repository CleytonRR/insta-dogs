import cn from '@/utils/cn';
import { ComponentProps } from 'react';

type ContainerProps = ComponentProps<'section'>;

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <section
      className={cn('mx-auto mt-0 max-w-[50rem] px-4 pt-0', className)}
      {...props}
    >
      {children}
    </section>
  );
};
