import React from 'react';
import './App.css';
import {PartialAnswer, Question} from "../models/models";
import OptionItem from "./Option";

interface QuestionCardProps {
    question: Question,
    onSelect: (answer: PartialAnswer) => void;
}

const QuestionCard = (props: QuestionCardProps) => {
    const {title, options, isRequired = false, isHidden = false, type} = props.question;
    return (
        <div>
            {!
                isHidden ? <div>
                {/* todo Add here check isRequired */}
                <h4>{title}</h4>
                {
                    options?.map((option) => {
                        return <OptionItem
                            key={option.optionId}
                            questionType={type}
                            option={option}
                            onSelect={props.onSelect}
                        />
                    })
                }
            </div> : null
            }
        </div>
    );
}

export default QuestionCard;