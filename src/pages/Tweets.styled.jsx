import styled from "styled-components";

export const TweetsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 380px);
  gap: 30px 30px;
  margin-bottom: 30px;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  margin: 0 auto;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #373737;
  transition: background-color 0.5s ease-out;

  &:hover {
    background: #5cd3a8;
  }
`;

export const LoadingLabel = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #ebd8ff;
`;
