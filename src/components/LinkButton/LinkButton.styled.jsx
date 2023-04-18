import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkButton = styled(NavLink)`
  display: block;
  padding: 14px 14px;
  width: 196px;
  height: 50px;
  margin-bottom: 20px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  text-align: center;
  color: #373737;
  transition: background-color 0.5s ease-out;

  &:hover {
    background: #5cd3a8;
  }
`;
