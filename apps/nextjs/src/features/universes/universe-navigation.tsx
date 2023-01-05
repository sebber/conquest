import LeftNavigation from "../shared/left-navigation";
import { useUniverse } from "./queries";

type UniverseNavigationProps = {
  universeId: string;
};

export default function UniverseNavigation({
  universeId,
}: UniverseNavigationProps) {
  const { data: universe } = useUniverse(universeId);

  if (!universe) {
    return null;
  }

  const links = [
    { href: `/universes/${universe.id}`, label: universe.name },
    { href: `/universes/${universe.id}/facilities`, label: "Facilities" },
    { href: `/universes/${universe.id}/fleets`, label: "Fleets" },
  ];
  return <LeftNavigation links={links} />;
}
