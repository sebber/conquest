import UniverseNavigation from "../universe-navigation";
import { useRouter } from "next/router";
import { UniversePageLayout } from "../universe-page-layout";

export default function FleetsScreen() {
  const router = useRouter();
  const id = router.query.universe as string;
  return (
    <UniversePageLayout leftColumn={<UniverseNavigation universeId={id} />}>
      <div>Fleets</div>
    </UniversePageLayout>
  );
}

FleetsScreen.auth = true;
