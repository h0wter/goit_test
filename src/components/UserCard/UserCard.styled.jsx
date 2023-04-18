import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  padding-top: 28px;
  text-align: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    left: 0px;
    top: 214px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BackgroundImg = styled.img`
  width: 308px;
  height: 168px;
  margin-bottom: 88px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
  &:before {
    content: "";
    position: absolute;
    width: 62px;
    height: 62px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #5736a3;
    border-radius: 85.9232px;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 9px;
  top: 9px;
  border-radius: 85.9232px;
`;

export const TweetsCount = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #ebd8ff;
`;

export const FollowersCount = styled(TweetsCount)`
  margin-bottom: 26px;
`;

export const FollowBtn = styled.button`
  padding: 14px 28px;
  width: 196px;
  height: 50px;

  background: ${(props) => (props.isFollowed ? "#5CD3A8" : "#ebd8ff")};
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
`;
