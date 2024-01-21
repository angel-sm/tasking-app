import Dropdown from "../../../components/Dropdown/Dropdown";

const RowStatus = () => (
  <Dropdown
    button="To do"
    group="Pass to"
    options={[
      {
        title: "Progress",
        action() {
          console.log("in progress");
        },
      },
    ]}
  />
);

export default RowStatus;
