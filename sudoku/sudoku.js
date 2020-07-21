function sudokuSolver(matrix) {
	let possibleNumbers = {},notThese = [], empty = 0, empties = 81, count = 0;
	while (empties && count < 20) {
		empties = 0;
		var matLen =  matrix.length;
		console.log("matrix lenth",matLen);
		
		for (var vert = 0; vert < matrix.length; vert++) {
			for (var hor = 0; hor < matrix.length; hor++) {
				if (!matrix[vert][hor]) {
					possibleNumbers = {};
					for (var check = 0; check < matrix.length; check++) {
						if (matrix[vert][check]) {
							possibleNumbers[matrix[vert][check]] = true;
						}
						if (matrix[check][hor]) {
							possibleNumbers[matrix[check][hor]] = true;
						}
					}
					for (var boxVert = Math.floor(vert / 3) * 3; boxVert < Math.floor(vert / 3) * 3 + 3; boxVert++) {
						for (var boxHor = Math.floor(hor / 3) * 3; boxHor < Math.floor(hor / 3) * 3 + 3; boxHor++) {
							if (matrix[boxVert][boxHor]) {
								possibleNumbers[matrix[boxVert][boxHor]] = true;
							}
						}
					}
					notThese = Object.keys(possibleNumbers);
					if (notThese.length == 8) {
						for (var i = 1; i <= 9; i++) {
							if (notThese.indexOf('' + i) < 0) {
								matrix[vert][hor] = i;
							}
						}
					} else {
						empties++;
					}
				}
			}
		}
		count++;
	}
	return matrix;
}


var puzzle = [
            [0,0,0,2,6,0,7,0,1],
            [6,8,0,0,7,0,0,9,0],
            [1,9,0,0,0,4,5,0,0],
            [8,2,0,1,0,0,0,4,0],
            [0,0,4,6,0,2,9,0,0],
            [0,5,0,0,0,3,0,2,8],
            [0,0,9,3,0,0,0,7,4],
            [0,4,0,0,5,0,0,3,6],
            [7,0,3,0,1,8,0,0,0]];

console.log(sudokuSolver(puzzle));