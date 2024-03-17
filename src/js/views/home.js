import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Character } from '../component/Characters.jsx';
import { Planet } from '../component/Planets.jsx';
import { Link } from 'react-router-dom';

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		const fetchCharacters = async () => {
		try {
			const response = await fetch('https://www.swapi.tech/api/people/');
			const data = await response.json();
			console.log('Fetched data Characters:', data);
			setCharacters(data.results);
		} catch (error) {
			console.error('Error fetching characters:', error);
		}
		};

		fetchCharacters();
	}, []);

	useEffect(() => {
		const fetchPlanets = async () => {
		try {
			const response = await fetch('https://www.swapi.tech/api/planets/');
			const data = await response.json();
			console.log('Fetched data Planets:', data);
			setPlanets(data.results);
		} catch (error) {
			console.error('Error fetching planets:', error);
		}
		};

		fetchPlanets();
	}, []);

	useEffect(() => {
		const fetchVehicles = async () => {
		try {
			const response = await fetch('https://www.swapi.tech/api/vehicles/');
			const data = await response.json();
			console.log('Fetched data Vehicles:', data);
			setVehicles(data.results);
		} catch (error) {
			console.error('Error fetching vehicles:', error);
		}
		};

		fetchVehicles();
	}, []);

	return (
		<div className="bg-dark text-white" style={{width:"100%", height: "100%"}}>
			<div className="container object-container " >
				<h1 className="text-warning">Characters</h1>
				<div className="card-container">
					{characters.map((characterData) => (
						<Character
							id={characterData.uid}
							key={characterData.uid}
							name={characterData.name}
						/>
						))
					}
				</div>
			</div>


			<div className="container object-container">
				<h1 className="text-warning">Planets</h1>
				<div className="card-container">
					{planets.map((planetData) => (
						<Planet
							id={planetData.uid}
							key={planetData.uid}
							name={planetData.name}
						/>
						))
					}
				</div>
			</div>
		</div>
	);
}
