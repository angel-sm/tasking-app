import RowActions from "./RowActions";
import RowStatus from "./RowStatus";

const TaskRow = () => (
  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
      John Doe
    </td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
    <td className="whitespace-nowrap px-4 py-2">
      <div className="flex gap-1">
        <RowStatus />
        <RowActions />
      </div>
    </td>
  </tr>
);

export default TaskRow;
