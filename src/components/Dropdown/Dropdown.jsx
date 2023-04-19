import { DropdownConnector, Select } from "./Dropdown.styled";

export const Dropdown = ({ filterOption, handleFilter }) => {
  const handleOptionSelect = (e) => {
    const option = e.target.value;
    handleFilter(option);
  };

  return (
    <DropdownConnector>
      <Select value={filterOption} onChange={handleOptionSelect}>
        <option value="all">Show All</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </Select>
    </DropdownConnector>
  );
};
