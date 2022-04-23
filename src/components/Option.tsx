import {Option, PartialAnswer} from "../models/models";
import React from "react";
import {QuestionType} from "../models/enums";

interface OptionItemProps {
    option: Option,
    questionType: QuestionType,
    onSelect: (answer: PartialAnswer) => void;
}

const OptionItem = (props: OptionItemProps) => {
    const {optionId, question, type} = props.option;
    const actualType = type ?? props.questionType;

    const handleSelectChange = (event: any) => {
        console.log(event);
        const selected: number[] = []; // todo define that value
        const alternativeAnswer = ''; // todo define that value
        props.onSelect({selected, alternativeAnswer })
    }

    return (
        <form key={optionId}>
            {/*{ todo add check if QuestionType = MultipleChoice/radio/text }*/}
                            <span>
                              <input
                                  id={optionId+''}
                                  type={actualType}
                                  name={question}
                                  onChange={handleSelectChange}
                              />
                                {question}
                            </span>
        </form>
    );
}
export default OptionItem;