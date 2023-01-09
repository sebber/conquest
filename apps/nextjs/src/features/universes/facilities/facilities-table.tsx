import { useState } from "react";

type FacilityDefinition = [string, string];
const facilities: FacilityDefinition[] = [
  ["barrack", "Barrack"],
  ["workshop", "Workshop"],
  ["starport", "Starport"],
];

type FacilitiesState = [string, number];
const defaultState: FacilitiesState[] = Array.from(facilities).map(([id]) => [
  id,
  0,
]);

export function FacilitiesTable() {
  const [current, setCurrent] = useState(defaultState);

  const build = (id: string) => {
    setCurrent((prev) => {
      const index = prev.findIndex(([fid]) => fid === id);
      if (index === -1) return prev;
      const facility = prev[index];
      if (!facility) return prev;
      const updated: FacilitiesState[] = [
        ...prev.slice(0, index),
        [id, facility[1] + 1],
        ...prev.slice(index + 1),
      ];
      return updated;
    });
  };
  const destroy = (id: string) => {
    setCurrent((prev) => {
      const index = prev.findIndex(([fid]) => fid === id);
      if (index === -1) return prev;
      const facility = prev[index];
      if (!facility) return prev;
      if (facility[1] <= 0) return prev;
      const updated: FacilitiesState[] = [
        ...prev.slice(0, index),
        [id, facility[1] - 1],
        ...prev.slice(index + 1),
      ];
      return updated;
    });
  };

  return (
    <div className="overflow-auto rounded-xl bg-slate-50 py-4 dark:bg-slate-800/25">
      <table className="w-full table-fixed border-collapse  text-sm ">
        <thead>
          <tr>
            <th className="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
              Type
            </th>
            <th className="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
              Built
            </th>
            <th className="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
              {/* Actions */}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800">
          {facilities.map(([fid, name]) => (
            <tr key={fid}>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {name}
              </td>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {current.find(([sid]) => fid === sid)?.[1]}
              </td>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                <button
                  onClick={() => build(fid)}
                  className="hover:text-slate-200"
                >
                  Build
                </button>{" "}
                <button
                  onClick={() => destroy(fid)}
                  className="hover:text-slate-200"
                >
                  Destroy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
