import useTictactoe from "./Tictactoe";
import "./App.css";

export default function App() {
	const { board, message, handleClick, restartGame } = useTictactoe();

	return (
		<div className="app">
			<div className="container">
				<div className="board-wrapper">
					<div className="board">
						{board.map((square, index) => {
							return (
								<div className="square" key={index} onClick={() => handleClick(index)}>
									{square}
								</div>
							);
						})}
					</div>
				</div>
				<button className="restart" onClick={restartGame}>
					Restart
				</button>
				<h2 className={`message ${message && "fade-in"}`}>&nbsp;{message && message}</h2>
			</div>
		</div>
	);
}
