import { Universe } from "@acme/db";

type UniverseListItemProps = {
  universe: Universe;
};

export function UniverseListItem({ universe }: UniverseListItemProps) {
  return (
    <div className="w-full rounded-md border border-slate-400 bg-slate-700 px-2 py-1">
      {universe.name}
    </div>
  );
}
