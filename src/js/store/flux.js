const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			charactersSW: [],
			characterDesc: [],
			planetsSW: [],
			planetsDesc: [],
			vehicleSW: [],
			vehiclesDesc: [],
			favorites: [],
			vehicleuid: []


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
			fetchVehiclesSW: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(data => {
						setStore({ vehicleSW: data.results })
						setStore({ vehicleuid: data.results.uid })
					})
					.catch(err => err)
			},
			fetchCharactersSW: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => {
						setStore({ charactersSW: data.results })
					})
					.catch(err => err)
			},
			fetchPlanetsSW: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => {
						setStore({ planetsSW: data.results })
					})
					.catch(err => err)
			},
			fetchcharacterDesc: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => response.json())
					.then((data) => {
						setStore({ characterDesc: data.result.properties });
					})
					.catch(err => err)
			},
			fetchplanetsDesc: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => response.json())
					.then((data) => {
						setStore({ planetsDesc: data.result.properties });
					})
					.catch(err => err)
			},
			fetchvehiclesDesc: (vehicleuid) => {
				fetch(`https://www.swapi.tech/api/vehicles/${vehicleuid}`)
					.then(response => response.json())
					.then((data) => {
						console.log(data);
						setStore({ vehiclesDesc: data.result.properties });
					})
					.catch(err => err)
			},
			addFavorite: (select) => {
				setStore({ favorites: [...getStore().favorites, select] });
				console.log(getStore().favorites);
			},

			deleteFavorite: (selected) => {
				setStore({
					favorites: getStore().favorites.filter((value, index) => index !== selected)
				});
			},
		}
	};
};

export default getState;
