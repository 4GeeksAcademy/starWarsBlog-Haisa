import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
  	const favorites = store.favorites;

	const removeFavorite = (name) => {
	  actions.removeFavorite(name);
	};


	return (
		<nav className="navbar" style={{backgroundColor: "black"}}>
			<div className="container">
				
				<Link to="/">
					<span className="navbar-brand mb-0 h1"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" className="img-fluid" style={{width: "100px", height: "50px"}}></img> </span>
				</Link>
				
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {favorites.length}
						</a>

						<ul className="dropdown-menu text-dark">
							{favorites.length === 0 ? (
							<li>
								<span className="dropdown-item">No favorites added yet</span>
							</li>
							) : (
							favorites.map((favorite, index) => (
								<li key={index}>
								<span className="dropdown-item">
									{favorite}
									<button
									className="btn btn-sm btn-danger ms-2"
									onClick={() => removeFavorite(favorite)}
									>
									X
									</button>
								</span>
								</li>
							))
							)}
						</ul>
					</div>
				</div>
			</div>
			
		</nav>
		
	);
};
