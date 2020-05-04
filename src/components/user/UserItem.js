import React from "react";
import PropTypes from "prop-types";

function UserItem(props) {
	const { avatar_url, login, html_url, id } = props.user;
	return (
		<div className="card text-center" key={id}>
			<img
				src={avatar_url}
				className="round-img"
				style={{ width: "60px" }}
				alt="avatar"
			/>
			<h3>{login}</h3>
			<div>
				<a href={html_url} className="btn btn-dark bt-sm my-1">
					More
				</a>
			</div>
		</div>
	);
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
