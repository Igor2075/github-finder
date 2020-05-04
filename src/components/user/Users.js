import React, { Component } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

export class Users extends Component {
	render() {
		return (
			<div style={userStyle}>
				{this.props.loading && <Spinner />}
				{this.props.users.map((user) => (
					<UserItem user={user} key={user.id} />
				))}
			</div>
		);
	}
}

const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gridGap: "1rem",
};

export default Users;
