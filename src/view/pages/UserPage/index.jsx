import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import UserCard from "../../components/UserCard";
import Loader from "../../common/Loader";

import { getUserByUsername } from "../../../store/createSlices/users";

const UserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { name } = useParams();

  const user = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(getUserByUsername(name));
  }, []);
  return (
    <>
      <Header />

      <Content>
        {loading ? (
          <Loader />
        ) : (
          <UserCard goBack={history.goBack} user={user} />
        )}
      </Content>
    </>
  );
};

export default UserPage;
