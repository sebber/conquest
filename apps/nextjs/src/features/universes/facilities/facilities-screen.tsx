import { useRouter } from "next/router";
import UniverseNavigation from "../universe-navigation";
import { UniversePageLayout } from "../universe-page-layout";

export default function FacilitiesScreen() {
  const router = useRouter();
  const id = router.query.universe as string;
  return (
    <UniversePageLayout leftColumn={<UniverseNavigation universeId={id} />}>
      <div>Facilities</div>
    </UniversePageLayout>
  );
}

FacilitiesScreen.auth = true;
