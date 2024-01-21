import { ITableProps } from "./Table.interface";

const Table = ({ columns, rows }: ITableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            {columns.map((column) => (
              <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">{rows && rows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
