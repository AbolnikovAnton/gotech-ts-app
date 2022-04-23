import React, {useEffect, useState} from 'react';
import './App.css';
import QuestionCard from "./QuestionCard";
import {Answer, Questionnary} from "../models/questions";

const Test = () => {
    const [select, setSelect] = useState("");
    const [questionnary, setQuestionnary] = useState({} as Questionnary);
    const [answers, setAnswers] = useState([] as Answer[]);

    useEffect(() => {
        fetch('http://localhost:3000/questionnaires/0')
            .then(response => response.json())
            .then(data => setQuestionnary(data))
    }, [])

    const handleSelectChange = (answer: Answer) => {
        const x = {...answers};
        x.push(answer)
        setAnswers(x)
    };


    return (
        <div>
            {
                questionnary.questions.map((question) => {
                    return <QuestionCard key={question.questionId} question={question} onSelect={handleSelectChange} />
                })
            }
        </div>
    );
}

export default Test;
