import React, {useEffect, useState} from 'react';
import './App.css';
import QuestionCard from "./QuestionCard";
import {Answer, PartialAnswer, Questionnary} from "../models/models";
import {fetchQuestionnaire} from "../repository/testRepository";

const Test = () => {
    const [questionnaire, setQuestionnaire] = useState({} as Questionnary);
    const [answers, setAnswers] = useState([] as Answer[]);

    useEffect(() => {
        // todo Maybe I can add the new screen with test id selection
        const id = 0; // Id from props
        fetchQuestionnaire(id).then(data => setQuestionnaire(data));
    }, [])

    const handleSelect = (answer: PartialAnswer, question: number) => {
        const x = {...answers};
        x.push({...answer, question})
        setAnswers(x)
    };

    return (
        <div>
            {
                questionnaire.questions.map((question) => {
                    return <QuestionCard
                        key={question.questionId}
                        question={question}
                        onSelect={(answer: PartialAnswer) => handleSelect(answer, question.questionId)}
                    />
                })
            }
        {/* todo add submit button  */}
        </div>
    );
}

export default Test;
