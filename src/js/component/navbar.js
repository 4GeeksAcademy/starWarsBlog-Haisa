import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const { favoritesCounter, selectedFavorites } = store;


	return (
		<nav className="navbar" style={{backgroundColor: "black"}}>
			<div className="container">
				
				<Link to="/">
					<span className="navbar-brand mb-0 h1"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" className="img-fluid" style={{width: "100px", height: "50px"}}></img> </span>
				</Link>
				
				<div className="ml-auto">
					<div className="dropdown">
					<button
						id="btnGroupDrop1"
						type="button"
						className="btn btn-secondary dropdown-toggle d-flex align-items-center"
						data-bs-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						>
						Favorites
						<span className="fav-counter-container">
							<span className="fav-counter">{favoritesCounter}</span>
						</span>
					</button>

						<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
							{selectedFavorites.length > 0 &&
								selectedFavorites.map((favorite, index) => (
								<li key={`favorite-${index}`}>
									{favorite.uid && (
									<div className="d-flex justify-content-between align-items-center">
										{favorite.type === 'character' && (
										<Link
											to={`/caracter-details/${favorite.uid}`}
											className="dropdown-item"
										>
											{favorite.name}
										</Link>
										)}
										{favorite.type === 'planet' && (
										<Link
											to={`/planet-details/${favorite.uid}`}
											className="dropdown-item"
										>
											{favorite.name}
										</Link>
										)}
										{favorite.type === 'vehicle' && (
										<Link
											to={`/vehicle-details/${favorite.uid}`}
											className="dropdown-item"
										>
											{favorite.name}
										</Link>
										)}
										<button
										className="btn btn-outline-danger btn-sm m-2"
										onClick={() => actions.removeFavorite(favorite)}
										>
										<i className="fas fa-trash"></i>
										</button>
									</div>
									)}
								</li>
								))}
							{selectedFavorites.length === 0 && (
								<li key="no-favorites">
								<span className="dropdown-item">No favorites selected</span>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
			
		</nav>
		
	);
};
