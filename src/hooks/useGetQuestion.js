import React, { useEffect, useState } from "react";
import { QUESTION_URL, QUESTION_IDS } from "../utils/constants";

const useGetQuestion = () => {
	const [currentQuestion, setCurrentQuestion] = useState(1);
    const [currentQuestionData, setCurrentQuestionData] = useState([]);

	useEffect(() => {
		getQuestion(currentQuestion);
    }, [currentQuestion]);
    
    const getQuestionId = (srNumber) => {
        const id = QUESTION_IDS?.filter((item) => {
            return item?.srNo === srNumber
        })
        return id;
    }

    const getQuestion = async () => {
		const data = await fetch(QUESTION_URL + getQuestionId(currentQuestion)[0]?.id  );
		const json = await data.json();
		setCurrentQuestionData(json);
	};

	return { currentQuestion, setCurrentQuestion: (item) => setCurrentQuestion(item), currentQuestionData };
};

export default useGetQuestion;
