import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import UniverseNavigation from "./universe-navigation";
import { UniversePageLayout } from "./universe-page-layout";
import { Universe } from "@acme/db";
import { useUniverse } from "./queries";

function JoinUniverseButton({ universe }: { universe: Universe }) {
  const trpcContext = trpc.useContext();
  const join = trpc.universe.join.useMutation({
    async onSuccess() {
      await trpcContext.universe.playingIn.invalidate({ id: universe.id });
    },
  });

  return (
    <button
      disabled={join.isLoading}
      onClick={() => join.mutate({ id: universe.id })}
      className="bg-slate-700"
    >
      Join Universe
    </button>
  );
}

export default function UniverseDashboardScreen() {
  const router = useRouter();
  const id = router.query.universe as string;
  const { data: universe, isLoading: loadingUniverse } = useUniverse(id);
  const { data: isPlayingHere = false } = trpc.universe.playingIn.useQuery({
    id,
  });

  return (
    <UniversePageLayout leftColumn={<UniverseNavigation universeId={id} />}>
      {loadingUniverse ? (
        "...loading"
      ) : (
        <>
          <div>Universe {universe?.id}</div>
          {!isPlayingHere
            ? universe && <JoinUniverseButton universe={universe} />
            : null}
        </>
      )}
    </UniversePageLayout>
  );
}

UniverseDashboardScreen.auth = true;
