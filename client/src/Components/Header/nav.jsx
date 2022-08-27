import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li>
            <NavLink className="link" to="/">
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/galery">
              Galery
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/posts">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/news">
             News
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contacts">
              Constacts
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
