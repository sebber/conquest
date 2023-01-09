import { ReactNode } from "react";

type PageHeaderProps = {
  children?: ReactNode;
};

export function PageHeader({ children }: PageHeaderProps) {
  return (
    <div className="mb-2 border-b border-slate-700">
      <div className="container mx-auto flex w-full flex-row items-center py-2 align-middle ">
        <div className="mx-4 text-2xl">Conquest</div>
        {children}
      </div>
    </div>
  );
}
