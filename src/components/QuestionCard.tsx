import React, {useEffect, useState} from 'react';
import './App.css';
import {Answer, Question} from "../models/questions";

interface QuestionCardProps {
    question: Question,
    onSelect: (answer:Answer) => {};
}

const QuestionCard = (question: Question) => {

    return (
        <div>
            <h4>{question.title}</h4>
            {
                question.options?.map((option) => {
                    return <form key={optionIdx}>
                            <span>
                              <input
                                  id={`q${questionIdx}`}
                                  type={question.type}
                                  name={question.value}
                                  onChange={handleSelectChange}
                                  value={select}
                              />
                                {option}
                            </span>
                    </form>
                })
            }
        </div>
    );
}

export default QuestionCard;