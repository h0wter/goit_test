import { useState } from "react";
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
  const isFollowed = followedUsers.includes(id);
  const count = followers.toLocaleString("en-US");

  const onFollowBtn = async () => {
    handleFollowUser(user, !isFollowed);
    // Состояние обновляется на следующем рендере и !isFollowed возвращает
    // следующее состоянии компонента, показывая подписался человек или отписался.
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
