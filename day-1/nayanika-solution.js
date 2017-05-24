for (
	var total = 0, i=1;
	i < 1000;
	!(i %3 && i %5) && (total+=i), i++);
	console.log(total);