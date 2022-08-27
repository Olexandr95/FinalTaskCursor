import React from "react";
import "./users.scss";

const UserField = ({ users, onDelete }) => {
  const { inputName, inputNickName, inputPhoto, date, _id } = users;

  return (
    <div className="main-conteiner">
      <div>
        <img src={inputPhoto} alt={inputName} className="left-side-img"></img>
      </div>
      <div className="right-side">
        <div className="content-tittle">
          <div>
            <span className="autor-name">{inputName} </span>
            <span className="autor-nickname-date">
              @{inputNickName} {date}
            </span>
          </div>
          <div id={_id} onClick={onDelete}>
            {" "}
            x
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserField;
