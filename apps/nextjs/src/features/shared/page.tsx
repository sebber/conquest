import { type ReactNode } from "react";
import { PageHeader } from "./page-header";
import TopNavigation from "./top-navigation";

type PageProps = {
  children: ReactNode;
  withGlobalNav?: boolean;
};

export default function Page({ children, withGlobalNav }: PageProps) {
  return (
    <div className="min-h-screen w-screen dark:bg-slate-900 dark:text-slate-100">
      <PageHeader>{withGlobalNav && <TopNavigation />}</PageHeader>
      {children}
    </div>
  );
}
