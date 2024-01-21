import Dropdown from "../../../components/Dropdown/Dropdown";

const RowActions = () => (
  <Dropdown
    button="..."
    group="Actions"
    options={[
      {
        title: "Edit",
        action() {
          console.log("in progress");
        },
      },
      {
        title: "Delete",
        action() {
          console.log("in progress");
        },
      },
    ]}
  />
);

export default RowActions;
