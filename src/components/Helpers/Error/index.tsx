import { ReactNode } from 'react';

type ErrorProps = {
  error?: ReactNode;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;
  return <p className="my-4 mb-0 text-red-600">{error}</p>;
};

export default Error;
