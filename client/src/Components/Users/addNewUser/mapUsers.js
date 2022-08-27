import React, { useEffect } from "react";
import UserField from "./users";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import { UsersSelector } from "../../../redax/reducers/usersReducer";
import { useDispatch } from "react-redux";
import { getApiUsers } from "../../../redax/actions/usersActions";

import { deleteApiUsers } from "../../../redax/actions/usersActions";

export default function MapUsers() {
  const users = useSelector(UsersSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiUsers("http://localhost:4004/users"));
  }, [users]);

  function deleteItem(e) {
    let id = e.target.id;
    dispatch(deleteApiUsers(`http://localhost:4004/users/${id}`));
    dispatch(getApiUsers("http://localhost:4004/users"));
  }
  return (
    <div>
      {users.length ? (
        users?.map((u) => {
          return <UserField users={u} key={uuid} onDelete={deleteItem} />;
        })
      ) : (
        <div style={{ color: "white" }}>There are no users...</div>
      )}
    </div>
  );
}
