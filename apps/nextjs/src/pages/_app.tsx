import "../styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppType } from "next/app";

import { trpc } from "../utils/trpc";
import { ReactNode } from "react";
import { NextPageWithAuth } from "../types";
import { Session } from "@acme/auth";

type AppTypeWithAuth = AppType & {
  Component: NextPageWithAuth;
  pageProps: { session: Session | null };
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppTypeWithAuth) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }: { children: ReactNode }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default trpc.withTRPC(MyApp);
