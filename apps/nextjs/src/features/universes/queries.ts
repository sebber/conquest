import { trpc } from "../../utils/trpc";

export function useUniverse(id: string) {
  return trpc.universe.byId.useQuery(id, {
    staleTime: 1000 * 5,
  });
}
