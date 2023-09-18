let age = parseInt(prompt('Який в тебе рік народження?'));
if (age === null || age === '') {
	alert('Шкода, що ви не захотіли ввести свій рік народження.');
}

let city = prompt('В якому місті ти живеш?');
if (city === null || city === '') {
	alert('Шкода, що ви не захотіли ввести своє місто.');
}

let sport = prompt('Який твій улюблений вид спорту?');
if (sport === null || sport === '') {
	alert('Шкода, що ви не захотіли ввести свій улюблений вид спорту.');
}

let checkCity = (city) => {
	if (city === 'Київ') {
		return 'Ти живеш у столиці України'
	}
	else if (city === 'Лондон') {
		return 'Ти живеш у столиці Великобританії'
	}
	else if (city === 'Вашингтон') {
		return 'Ти живеш у столиці США'
	}
	else {
		return `Ти живеш у ${city}.`;
	}
}

let checkSport = (sport) => {
	if (sport === 'бокс') {
		return 'Круто! Хочеш стати як Кличко?'
	}
	else if (sport === 'футбол') {
		return 'Круто! Хочеш стати як Мессі?'
	}
	else if (sport === 'баскетбол') {
		return 'Круто! Хочеш стати як Джордан?'
	}
	else {
		return `Круто! Тобі подобається ${sport}.`;
	}
}

alert(`Тобі ${2023 - age} років \n ${checkCity(city)} \n ${checkSport(sport)}`);
