import "./users.scss";
import { useDispatch, useSelector } from "react-redux";
import { UsersSelector } from "../../../redax/reducers/usersReducer";
import { getApiUsers, deleteApiUsers } from "../../../redax/actions/usersActions";

const UserField = ({ users }) => {
  const { inputName, inputNickName, inputPhoto, date, _id } = users;
  const post = useSelector(UsersSelector);

  const dispatch = useDispatch();
  const deleteItem = (e) => {
    console.log(e.target.id)
    let id = e.target.id;
    console.log(post.filter((el)=>el._id===id))
    console.log(`http://localhost:4004/users/${id}`)
    dispatch(deleteApiUsers(`http://localhost:4004/users/${id}`));
  }

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
          <div id={_id} onClick={deleteItem}> x
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserField;
