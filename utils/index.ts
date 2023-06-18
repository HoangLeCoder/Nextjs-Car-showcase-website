export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '2bc7c49e5dmshc3563c618593a8bp188811jsn87aa546c59eb',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        {headers: headers, }
    );

    const result = await response.json(); 

    return result;
}
