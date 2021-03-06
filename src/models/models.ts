import {QuestionType} from "./enums";

export interface Questionnary {
    id: string,
    name: string,
    questions: Question[]
}

export interface Question {
    questionId: number,
    title: string,
    type: QuestionType,
    options: Option [],
    isRequired?: boolean,
    isHidden?: boolean
}

export interface Option {
    optionId: number,
    question: string
    type?: QuestionType,
    action?: Action
}

export interface Action {
    name: string,
    data: number
}

export interface Answer {
    question: number,
    selected?: number[],
    alternativeAnswer?: string
}

export interface PartialAnswer {
    selected?: number[],
    alternativeAnswer?: string
}