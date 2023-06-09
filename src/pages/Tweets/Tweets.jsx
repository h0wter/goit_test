import { useEffect, useState, useMemo } from "react";
import { getUsers, updateUserData } from "../../services/api";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { TweetsList } from "../../components/TweetsList/TweetsList";
import { LoadMoreBtn } from "./Tweets.styled";
import { LinkButton } from "../../components/LinkButton/LinkButton.styled";

const TweetsPage = () => {
  const followedUsersParsed = JSON.parse(localStorage.getItem("followedUsers"));
  const [users, setUsers] = useState([]);
  // Поскольку нет возможности получить с бэкенда пользователей отфильтрованных по
  // подписке, запрос возвращает всех пользователей и сохраняет в массив users.
  // Иначе при смене фильтра могут отображаться не все пользователи, т.к. он фильтрует
  // только тех пользователей, которые уже загружены через пагинацию.
  const [usersToShow, setUsersToShow] = useState([]);
  const [followedUsers, setFollowedUsers] = useState(followedUsersParsed || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOption, setFilterOption] = useState("all");

  const handleFollowUser = async (followedUser, shouldFollow) => {
    const { id, followers: prevFollowers } = followedUser;

    const followers = shouldFollow ? prevFollowers + 1 : prevFollowers - 1;

    const result = await updateUserData(id, {
      ...followedUser,
      followers,
    });

    if (!result) return; // Если при запросе на сервер произошла ошибка, в консоль выведется ошибка, а операция прервется.

    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              followers,
            }
          : user
      )
    );

    handleToggleFollow(id, shouldFollow);
  };

  const handleToggleFollow = (id, shouldFollow) => {
    setFollowedUsers((prevFollowedUsers) =>
      shouldFollow
        ? [...prevFollowedUsers, id]
        : [...prevFollowedUsers.filter((userId) => userId !== id)]
    );
  };

  const handleFilter = (option) => {
    setFilterOption(option);
    setCurrentPage(1);
    setUsersToShow([]);
  };

  // const getFilteredUsers = () => {
  //   if (filterOption === "all") {
  //     return users;
  //   }

  //   return users.filter((user) => {
  //     return filterOption === "following"
  //       ? followedUsers.includes(user.id)
  //       : !followedUsers.includes(user.id);
  //   });
  // };

  const getFilteredUsers = useMemo(() => {
    if (filterOption === "all") {
      return users;
    }

    return users.filter((user) => {
      return filterOption === "following"
        ? followedUsers.includes(user.id)
        : !followedUsers.includes(user.id);
    });
  }, [filterOption, users, followedUsers]);

  useEffect(() => {
    getUsers().then((result) => setUsers([...result]));
  }, []);

  useEffect(() => {
    const users = [...getFilteredUsers.slice(0, 9 * currentPage)];
    setUsersToShow(users);
  }, [currentPage, users, filterOption]); //users добавлены в зависимости, чтобы useEffect сработал после первого рендера, когда данные с api попадают в массив.

  useEffect(() => {
    localStorage.setItem("followedUsers", JSON.stringify(followedUsers));
  }, [followedUsers]);

  if (users.length > 0) {
    return (
      <>
        <LinkButton to="/">Go back</LinkButton>
        <Dropdown
          filterOption={filterOption}
          handleFilter={handleFilter}
        ></Dropdown>
        <TweetsList
          users={usersToShow}
          followedUsers={followedUsers}
          handleFollowUser={handleFollowUser}
        />
        {usersToShow.length > 0 && usersToShow.length < users.length ? (
          <LoadMoreBtn
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Load More
          </LoadMoreBtn>
        ) : null}
      </>
    );
  }
};

export default TweetsPage;
