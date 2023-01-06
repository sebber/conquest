import { ReactNode } from "react";

type PageHeaderProps = {
  children?: ReactNode;
};

export function PageHeader({ children }: PageHeaderProps) {
  return (
    <div className="container mx-auto flex w-full flex-row items-center py-2 align-middle">
      <div className="mr-2 text-2xl">Conquest</div>
      {children}
    </div>
  );
}
