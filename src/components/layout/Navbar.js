import React from "react";
import PropTypes from "prop-types";

function Navbar({ icon, title }) {
	return (
		<nav className="navbar bg-primary">
			<i className={icon} />
			{title}
		</nav>
	);
}

Navbar.defaultProps = {
	title: "Github Finder",
	icon: "fab fa-github",
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;