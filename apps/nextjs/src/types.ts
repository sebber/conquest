import { type NextPage } from "next";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithAuth<P = {}, IP = P> = NextPage<P, IP> & {
  auth?: boolean;
};
