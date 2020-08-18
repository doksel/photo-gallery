import React from "react";

import { Card, Image, UserInformation, Name } from "./styles";

const UserCard = ({ user = {} }) => {
  return (
    <Card>
      {user ? (
        <>
          <Image>
            <img src={user.profile_image.large} alt={user.name} />
          </Image>
          <UserInformation>
            <Name>Fullname: {user.name}</Name>
            <p>Collections: {user.total_collections}</p>
            <p>Likes: {user.total_likes}</p>
            <p>Total photos: {user.total_photos}</p>
            <p>Followers count: {user.followers_count}</p>
          </UserInformation>
        </>
      ) : (
        <Name>User not found</Name>
      )}
    </Card>
  );
};

export default UserCard;
