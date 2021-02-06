import { PropsWithChildren } from 'react';

function Main({ children }: PropsWithChildren<React.ReactNode>) {
  return <main>{children}</main>;
}

export { Main };
