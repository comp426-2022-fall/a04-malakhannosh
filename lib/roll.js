function roll(num_sides, num_dice, num_rolls) {
    let output = {
		"sides": num_sides,
		"dice": num_dice,
		"rolls": num_rolls,
		"results": new Array(num_rolls)
	};

    for (let i = 0; i < num_rolls; i++) {
        let sum = 0;
        for(let j = 0; j < num_dice; j++) {
            sum += Math.floor(Math.random() * num_sides) + 1;
        }
        output['results'][i] = sum;
    }
    return output;
}

export{roll};
