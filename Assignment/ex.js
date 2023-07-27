const X = 0 // DEAD
const O = 1 // ALIVE
let lifeCell = 0;
let deadCell = new Array();
let aliveCell = new Array();

let initialState = [
	[X,X,X,X,X],
	[X,X,X,X,X],
	[X,O,O,O,X],
	[X,X,X,X,X],
	[X,X,X,X,X],
]

let secondState = [
	[X,X,X,X,X],
	[X,X,O,X,X],
	[X,X,O,X,X],
	[X,X,O,X,X],
	[X,X,X,X,X],
]

function checkedDead(i, j) {
	if (i === 0) {
		if (j === 0) {
			if (initialState[i][j + 1] === O) lifeCell++;

			if (initialState[i + 1][j] === O) lifeCell++;
			if (initialState[i + 1][j + 1] === O) lifeCell++;
		} else if (j + 1 === initialState[0].legnth) {
			if (initialState[i][j - 1] === O) lifeCell++;

			if (initialState[i + 1][j - 1] === O) lifeCell++;
			if (initialState[i + 1][j] === O) lifeCell++;
		} else {
			if (initialState[i][j - 1] === O) lifeCell++;
			if (initialState[i][j + 1] === O) lifeCell++;

			if (initialState[i + 1][j - 1] === O) lifeCell++;
			if (initialState[i + 1][j] === O) lifeCell++;
			if (initialState[i + 1][j + 1] === O) lifeCell++;
		}

	} else if (i + 1 === initialState.length) {
		if (j === 0) {
			if (initialState[i - 1][j] === O) lifeCell++;
			if (initialState[i - 1][j + 1] === O) lifeCell++;

			if (initialState[i][j + 1] === O) lifeCell++;
		} else if (j + 1 === initialState[0].legnth) {
			if (initialState[i - 1][j - 1] === O) lifeCell++;
			if (initialState[i - 1][j] === O) lifeCell++;

			if (initialState[i][j - 1] === O) lifeCell++;
		} else {
			if (initialState[i - 1][j - 1] === O) lifeCell++;
			if (initialState[i - 1][j] === O) lifeCell++;
			if (initialState[i - 1][j + 1] === O) lifeCell++;

			if (initialState[i][j - 1] === O) lifeCell++;
			if (initialState[i][j + 1] === O) lifeCell++;
		}
	} else {
		if (initialState[i - 1][j - 1] === O) lifeCell++;
		if (initialState[i - 1][j] === O) lifeCell++;
		if (initialState[i - 1][j + 1] === O) lifeCell++;

		if (initialState[i][j - 1] === O) lifeCell++;
		if (initialState[i][j + 1] === O) lifeCell++;

		if (initialState[i + 1][j - 1] === O) lifeCell++;
		if (initialState[i + 1][j] === O) lifeCell++;
		if (initialState[i + 1][j + 1] === O) lifeCell++;
	}

	if (lifeCell < 2 || lifeCell > 3) { deadCell.push([i, j]) }
}

function checkedAlive(i, j) {
	if (i === 0) {
		if (j === 0) {
			if (initialState[i][j + 1] === O) lifeCell++;

			if (initialState[i + 1][j] === O) lifeCell++;
			if (initialState[i + 1][j + 1] === O) lifeCell++;
		} else if (j + 1 === initialState[0].legnth) {
			if (initialState[i][j - 1] === O) lifeCell++;

			if (initialState[i + 1][j - 1] === O) lifeCell++;
			if (initialState[i + 1][j] === O) lifeCell++;
		} else {
			if (initialState[i][j - 1] === O) lifeCell++;
			if (initialState[i][j + 1] === O) lifeCell++;

			if (initialState[i + 1][j - 1] === O) lifeCell++;
			if (initialState[i + 1][j] === O) lifeCell++;
			if (initialState[i + 1][j + 1] === O) lifeCell++;
		}

	} else if (i + 1 === initialState.length) {
		if (j === 0) {
			if (initialState[i - 1][j] === O) lifeCell++;
			if (initialState[i - 1][j + 1] === O) lifeCell++;

			if (initialState[i][j + 1] === O) lifeCell++;
		} else if (j + 1 === initialState[0].legnth) {
			if (initialState[i - 1][j - 1] === O) lifeCell++;
			if (initialState[i - 1][j] === O) lifeCell++;

			if (initialState[i][j - 1] === O) lifeCell++;
		} else {
			if (initialState[i - 1][j - 1] === O) lifeCell++;
			if (initialState[i - 1][j] === O) lifeCell++;
			if (initialState[i - 1][j + 1] === O) lifeCell++;

			if (initialState[i][j - 1] === O) lifeCell++;
			if (initialState[i][j + 1] === O) lifeCell++;
		}
	} else {
		if (initialState[i - 1][j - 1] === O) lifeCell++;
		if (initialState[i - 1][j] === O) lifeCell++;
		if (initialState[i - 1][j + 1] === O) lifeCell++;

		if (initialState[i][j - 1] === O) lifeCell++;
		if (initialState[i][j + 1] === O) lifeCell++;

		if (initialState[i + 1][j - 1] === O) lifeCell++;
		if (initialState[i + 1][j] === O) lifeCell++;
		if (initialState[i + 1][j + 1] === O) lifeCell++;
	}


	if (lifeCell === 3) { aliveCell.push([i, j]) }

	lifeCell = 0;
}

function calculateNextState(prevState) {





				for(let i=0; i < initialState.length; i++){
					for (let j = 0; j < initialState[0].length; j++) {

						if (initialState[i][j] === O) {
							checkedDead(i, j);
						}
						checkedAlive(i, j)
					}
				}

				for(let q = 0; q<deadCell.length; q++){
				initialState[deadCell[q][0]][deadCell[q][1]] = 0
				initialState[aliveCell[q][0]][aliveCell[q][1]] = 1
				}




        // write your code
	return initialState

}

const str = JSON.stringify
// 결과로 true가 찍혀야 합니다.
console.log(
        str(calculateNextState(initialState)) === str(secondState)
)
