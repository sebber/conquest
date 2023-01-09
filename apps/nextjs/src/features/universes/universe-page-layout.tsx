import { ReactNode } from "react";
import Page from "../shared/page";

type UniversePageLayoutProps = {
  children: ReactNode;
  leftColumn?: ReactNode;
};

export function UniversePageLayout({
  children,
  leftColumn,
}: UniversePageLayoutProps) {
  return (
    <Page withGlobalNav>
      <div className="container mx-auto">
        <div className="flex w-full flex-row space-x-2 justify-self-center">
          {leftColumn && <div>{leftColumn}</div>}
          <main className="flex w-full flex-col">{children}</main>
        </div>
      </div>
    </Page>
  );
}
