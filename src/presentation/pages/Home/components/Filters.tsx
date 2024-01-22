import { setTaskFilters } from "@/context/Task/infrastructure/redux/Task.slice";
import { AppDispatch } from "@/context/shared/infrastructure/redux/Index";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface IFilter {
  name: string;
  duration: string;
}

export interface IUseStateFilter {
  [prop: string]: IFilter;
}

const FILTER_OPTIONS = [
  { name: "short", duration: "30 minutes or less" },
  { name: "medium", duration: "30 minutes to 1 hour" },
  { name: "long", duration: "more than 1 hour" },
] as Array<IFilter>;

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [filters, setFilters] = useState<IUseStateFilter>({});

  const handleSelectFilter = (filter: IFilter) => {
    if (filters[filter.name]) {
      delete filters[filter.name];
      dispatch(setTaskFilters(Object.keys(filters)));
      return;
    }
    setFilters((old) => {
      const filters = { ...old, [filter.name]: filter };
      dispatch(setTaskFilters(Object.keys(filters)));
      return filters;
    });
  };

  return (
    <div className="flex gap-8">
      <div className="relative">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center gap-2 text-gray-900 transition border px-4 py-2 rounded-md">
            <span className="text-sm font-medium"> Filters </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
            <div className="w-60 rounded border border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700">
                  {" "}
                  {Object.keys(filters).length} Selected{" "}
                </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                >
                  Reset
                </button>
              </header>

              <ul className="space-y-1 border-t border-gray-200 p-4">
                {FILTER_OPTIONS.map((filter) => (
                  <li key={filter.name}>
                    <label
                      htmlFor={filter.name}
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id={filter.name}
                        className="h-5 w-5 rounded border-gray-300"
                        onClick={() => handleSelectFilter(filter)}
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        {filter.duration}{" "}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Filters;
