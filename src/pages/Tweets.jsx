import { useEffect, useState } from "react";
import { UserCard } from "../components/UserCard/UserCard";
import { getUsers } from "../services/api";
import { TweetsList, LoadMoreBtn, LoadingLabel } from "./Tweets.styled";
import { LinkButton } from "../components/LinkButton/LinkButton.styled";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const followedUsersParsed = JSON.parse(localStorage.getItem("followedUsers"));
  const [followedUsers, setFollowedUsers] = useState(followedUsersParsed || []);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFollowUser = async (id, shouldIncrement) => {
    if (shouldIncrement) {
      setFollowedUsers([...followedUsers, id]);
    } else {
      setFollowedUsers([...followedUsers.filter((user) => user !== id)]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers(currentPage);
      setUsers([...users, ...result]);
    };
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem("followedUsers", JSON.stringify(followedUsers));
  }, [followedUsers]);

  if (users.length > 0) {
    return (
      <>
        <LinkButton to="/">Go back</LinkButton>
        <TweetsList>
          {users.map((user) => (
            <UserCard
              user={user}
              followedUsers={followedUsers}
              handleFollowUser={handleFollowUser}
              key={user.id}
            >
              {user.user}
            </UserCard>
          ))}
        </TweetsList>
        <LoadMoreBtn
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          Load More
        </LoadMoreBtn>
      </>
    );
  }
};

export default TweetsPage;
