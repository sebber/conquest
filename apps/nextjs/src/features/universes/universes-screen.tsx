import Link from "next/link";
import { trpc } from "../../utils/trpc";
import { UniversePageLayout } from "./universe-page-layout";
import { UniverseListItem } from "./universe-list-item";

export default function UniversesScreen() {
  const universes = trpc.universe.all.useQuery();
  return (
    <UniversePageLayout>
      <div className="my-4 flex flex-col space-y-4">
        {universes.isLoading
          ? "is Loading..."
          : universes.data?.map((universe) => (
              <Link key={universe.id} href={`/universes/${universe.id}`}>
                <UniverseListItem universe={universe} />
              </Link>
            ))}
      </div>
    </UniversePageLayout>
  );
}

UniversesScreen.auth = true;
