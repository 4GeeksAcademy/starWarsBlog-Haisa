import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	
	const { store} = useContext(Context);
	const { actions } = useContext(Context);



	return (
		<div className="bg-dark text-white" style={{margin: "0", width:"100%", height: "100%"}}>
			<div className="container object-container">
				<h1 className="text-warning">Characters</h1>
				<div className="my-carousel">
					
					{store.characters.map((item) => {
						return(
							<div className="my-card">
						<div>
							<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt=""></img>
						</div>
						<div className="body-text">
							<p><strong>Name: </strong> {item.properties.name}</p>
							<p><strong>Gender:</strong> {item.properties.gender}</p>
							<p><strong>Hair Color:</strong> {item.properties.hair_color}</p>
							<p><strong>Eye Color:</strong> {item.properties.eye_color}</p>
						</div>
						<div className="d-flex justify-content-between button-footer">
							<Link to={`/characters/${item._id}`} className="btn btn-outline-warning">Learn more</Link>
							<button className="btn btn-outline-danger" onClick={() => actions.addFavorites(item.name)} >
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-heart-fill"  viewBox="0 0 16 16">
  									<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
								</svg>
							</button>
						</div>
					</div>
						)
					})}
					
				</div>
			</div>


			<div className="container object-container">
				<h1 className="text-warning">Planets</h1>
				<div className="my-carousel">
					
					{store.planets.map((item) => {
						return(
							<div className="my-card">
								<div>
									<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg` }alt=""></img>
								</div>
								<div className="body-text">
									<p><strong>Population:</strong>{item.properties.population}</p>
									<p><strong>Terrrain:</strong>{item.properties.terrain}</p>
								</div>
								<div className="d-flex justify-content-between button-footer">
									<Link to={`/planets/${item._id}`} className="btn btn-outline-warning">Learn more</Link>
									<button className="btn btn-outline-danger" onClick={() => actions.addFavorites(item.name)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillName="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
										</svg>
									</button>
								</div>
							</div>
						)
					})}
					
				</div>
			</div>
		</div>
	);
}
