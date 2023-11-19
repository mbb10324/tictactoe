import { useState } from "react";

export default function useTictactoe() {
	const [board, setBoard] = useState(Array(9).fill(""));
	const [player, setPlayer] = useState("X");
	const [message, setMessage] = useState(null);

	function handleClick(index) {
		const newBoard = [...board];
		if (newBoard[index] || message) return;
		newBoard[index] = player;
		setBoard(newBoard);
		if (checkWin(newBoard, player)) return setMessage(player + " Wins");
		if (checkTie(newBoard)) return setMessage("Tie Game");
		setPlayer(player === "X" ? "O" : "X");
	}

	const winCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	function checkWin(board, player) {
		var i, j, markCount;
		for (i = 0; i < winCombinations.length; i++) {
			markCount = 0;
			for (j = 0; j < winCombinations[i].length; j++) {
				if (board[winCombinations[i][j]] === player) {
					markCount++;
				}
				if (markCount === 3) {
					return true;
				}
			}
		}
		return false;
	}

	function checkTie(board) {
		for (var i = 1; i <= Object.keys(board).length; i++) {
			if (board[i] === "" && !message) {
				return false;
			}
		}
		return true;
	}

	function restartGame() {
		setBoard(Array(9).fill(""));
		setMessage(null);
		setPlayer("X");
	}

	return {
		board,
		message,
		handleClick,
		restartGame,
	};
}
