let myMainfunction = () => {
	let current = 0; // curseurs de la collection
	const chunk = 3; // nombre d'éléments à prendre par exécution
	let collection = ["papa", "maman", "enfant", "bebe", "a", "b", "c", "d", "ii", "oo", "aa", "ee", "yy"];
	let destroy; // valeur de retour setInterval;
	let myFunction = () => {
		if (current >= collection.length) {
			clearInterval(destroy);
		} else {
			for (let i = current; (i < collection.length) && (i < chunk + current); i++) {
				console.log(collection[i]);
			}
			current += chunk;
		}
	};

	destroy = setInterval(myFunction, 3000);
};

myMainfunction();