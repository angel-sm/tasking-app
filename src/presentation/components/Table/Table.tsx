import { ITableProps } from "./Table.interface";

const Table = ({ columns, rows }: ITableProps) => {
  return (
    <div className="container mx-auto">
      <table className="bg-white table-fixed">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            {columns.map((column, idx) => (
              <th
                key={idx}
                className="text-left px-4 py-2 font-medium text-gray-900"
              >
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
