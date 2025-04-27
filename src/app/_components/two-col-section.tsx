import { ReactNode } from 'react';

type Props = {
  title: string;
  children?: ReactNode;
};

export default function TwoColSection({ title, children }: Props) {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex-1 pr-6">
        <h3 className="big">{title}</h3>
      </div>
      <div className="flex-1">{children}</div>
    </section>
  );
}
