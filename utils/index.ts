export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '3696d399a9msh7fd87dc311caf54p191c9cjsnca054ea9f010',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const resposne = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {headers: headers,});

    const result = await resposne.json();

    return result;
}