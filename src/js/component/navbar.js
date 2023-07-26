import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handleDeleteFavorites = (e, name) => {
		e.stopPropagation();
		const myfavs = store.favorites.filter((item) => item.name !== name)
		actions.newFavorites(myfavs)
	};

	return (
		<>
			<nav className="navbar navbar-light mb-3 p-4" style={{ background: "#000000" }}>
				<div className="container">
					<Link to="/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_Wars_-_The_Last_Jedi_logo.png/800px-Star_Wars_-_The_Last_Jedi_logo.png?20201015132623" />
					</Link>
					<div className="dropdown">
						<button
							className="btn dropdown-toggle "
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites ({store.favorites.length})
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites.length === 0 ? (
								<li className="dropdown-item">None</li>
							) : (
								store.favorites.map((byeFav) => (
									<li key={byeFav.id}>
										<div className="item-container">
											<Link
												to={`/${byeFav.class}/${byeFav.id}/${byeFav.name}`}
											>
												{byeFav.name}
											</Link>

											<button
												onClick={(e) => handleDeleteFavorites(
													e, byeFav.name
												)
												}
											>
												<i className="fa-solid fa-trash "></i>
											</button>
										</div>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
