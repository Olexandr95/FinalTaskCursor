import React, { useEffect } from "react";
import UserField from "./users";
import { useSelector } from "react-redux";
import { UsersSelector } from "../../../redax/usersReducer";
import { useDispatch } from "react-redux";
import { getApiUsers } from "../../../redax/actions";

export default function MapUsers() {
  const users = useSelector(UsersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiUsers("http://localhost:4004/users"));
  }, []);

  return (
    <div>
      {users.length ? (
        users.reverse().map((u, i) => {
          return <UserField users={u} key={i} />;
        })
      ) : (
        <div style={{ color: "white" }}>There are no users...</div>
      )}
    </div>
  );
}
