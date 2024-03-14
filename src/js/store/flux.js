const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			urlBase: "https://www.swapi.tech/api",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {
				fetch(`${getStore().urlBase}/people`)
					.then((response) => response.json())
					.then((data) => {
						for( let item of data.results){
							fetch(item.url)
							.then((response) => response.json())
							.then((data) =>{
								setStore({
									characters: [...getStore().characters, data.result]
								})
							}).catch((err)  => {
								console.log(err)
							})
						}
					}
				).catch((err)  => {
					console.log(err)
				})
				
					
				
			},

			getPlanets: () => {
				fetch(`${getStore().urlBase}/planets`)
					.then((response) => response.json())
					.then((data) => {
						for( let item of data.results){
							fetch(item.url)
							.then((response) => response.json())
							.then((data) =>{
								setStore({
									planets: [...getStore().planets, data.result]
								})
							}).catch((err)  => {
								console.log(err)
							})
						}
					}
				).catch((err)  => {
					console.log(err)
				})
				
			},


			addFavorites: (name  ) => {
				const store = getStore()
				console.log(name)
				setStore({favorites:[...store.favorites ,name]})
			},
			removeFavorite: (name) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter((favorite) => favorite !== name);
				setStore({ favorites: updatedFavorites });
			  }


			
		}
	};
};

export default getState;
