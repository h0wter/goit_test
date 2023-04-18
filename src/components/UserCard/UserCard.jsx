import { useState } from "react";
import { updateUserData } from "../../services/api";
import {
  AvatarWrapper,
  Avatar,
  BackgroundImg,
  CardWrapper,
  Logo,
  TweetsCount,
  FollowBtn,
  FollowersCount,
} from "./UserCard.styled";
import background from "../../assets/CardBackground.png";
import logo from "../../assets/Logo.png";

export const UserCard = ({ user, handleFollowUser, followedUsers }) => {
  const { id, tweets, followers, avatar } = user;
  const [followersCount, setFollowersCount] = useState(followers);
  const [isFollowed, setIsFollowed] = useState(followedUsers.includes(id));
  const count = followersCount.toLocaleString("en-US");

  const onFollowBtn = async () => {
    const shouldIncrement = !isFollowed; // Состояние обновляется на следующем рендере и !isFollowed возвращает следующее состоянии компонента, показывая подписался человек или отписался.
    const result = await updateUserData(id, {
      ...user,
      followers: shouldIncrement ? followersCount + 1 : followersCount - 1,
    });
    console.log(result);
    setIsFollowed(shouldIncrement);
    setFollowersCount(
      shouldIncrement ? followersCount + 1 : followersCount - 1
    );
    handleFollowUser(id, shouldIncrement);
  };

  return (
    <CardWrapper>
      <Logo src={logo} alt="Logo Image" />
      <BackgroundImg src={background} alt="Card Background Image" />
      <AvatarWrapper>
        <Avatar src={avatar} alt="User Avatar" />
      </AvatarWrapper>
      <TweetsCount>Tweets {tweets}</TweetsCount>
      <FollowersCount>Followers {count}</FollowersCount>
      <FollowBtn isFollowed={isFollowed} onClick={onFollowBtn}>
        {isFollowed ? "Following" : "Follow"}
      </FollowBtn>
    </CardWrapper>
  );
};
