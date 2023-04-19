import styled from "styled-components";

export const DropdownConnector = styled.div`
  margin-bottom: 20px;
`;

export const Select = styled.select`
  appearance: none;
  background-color: #ebd8ff;
  border: 1px solid #c7c7cc;
  border-radius: 4px;
  color: #000000;
  font-size: 16px;
  padding: 8px 12px;
  margin: 0;

  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;

  &:focus {
    outline: none;
    border-color: #007aff;
  }

  & option {
    font-size: 16px;
    color: #333;
    background-color: #ebd8ff;
  }
`;
