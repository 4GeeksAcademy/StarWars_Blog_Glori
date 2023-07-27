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
						<a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</a>

						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							{store.favorites.map((value, index) => {
								return (
									<li key={index}>
										{
											store.favorites.length === 0 ? <a className="dropdown-item">Empty</a> : <a className="dropdown-item d-flex " href="#">
												{value}
												<i className=" btn fas fa-trash-alt" onClick={() => actions.deleteFavorite(index)}></i>
											</a>
										}
									</li>
								);
							})}
						</ul>
					</div>

				</div>
			</nav>
		</>
	);
};
