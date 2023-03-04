import React from "react";
import useGetQuestion from "../hooks/useGetQuestion";
import { MathJax } from "better-react-mathjax";

const Question = () => {
	const { currentQuestion, setCurrentQuestion, currentQuestionData } = useGetQuestion();

	const incrementCounter = () => {
		setCurrentQuestion(currentQuestion + 1);
	};

	const decrementCounter = () => {
		setCurrentQuestion(currentQuestion - 1);
	};

	return (
		<div className="flex w-full h-screen justify-center items-center p-2">
			<div className="flex-col p-4 rounded-lg shadow-xl bg-white w-3/4">
				<MathJax>
					<p className="font-semibold sm:text-xl">{currentQuestionData[0]?.Question}</p>
				</MathJax>
				<div className="flex justify-center">
					<button
						className="sm:w-40 w-32  border-2 shadow-sm rounded-md m-4 sm:h-12 h-10 bg-slate-500 text-white disabled:bg-white disabled:text-black "
						disabled={currentQuestion === 1}
						onClick={decrementCounter}
					>
						Previous
					</button>
					<button
						className="sm:w-40 w-32  border-2 shadow-sm  rounded-md m-4 sm:h-12 h-10 bg-slate-500 text-white disabled:bg-white disabled:text-black"
						disabled={currentQuestion === 3}
						onClick={incrementCounter}
					>
						Next
					</button>
				</div>
				<p className="flex justify-end font-semibold text-slate-500 sm:text-xl">({currentQuestion}/3)</p>
			</div>
		</div>
	);
};

export default Question;
