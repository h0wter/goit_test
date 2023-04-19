import { UserCard } from "../UserCard/UserCard";
import { List } from "./TweetsList.styled";

export const TweetsList = ({ users, ...props }) => (
  <List>
    {users.map((user) => (
      <UserCard user={user} {...props} key={user.id}>
        {user.user}
      </UserCard>
    ))}
  </List>
);
