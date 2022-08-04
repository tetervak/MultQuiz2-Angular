import { Injectable } from '@angular/core';
import {Grade} from "./grade";
import {MultiplicationProblem} from "./multiplication-problem";

@Injectable({
  providedIn: 'root'
})
export class MultiplicationQuizService {
  problem: MultiplicationProblem;
  userAnswer: string;
  constructor() {
    this.problem = new MultiplicationProblem();
    this.userAnswer = '';
  }
  reset() {
    this.problem.reset();
    this.userAnswer = '';
  }
  gradeQuiz(): Grade {
    if (this.userAnswer === '') {
      this.userAnswer = 'empty';
      return Grade.InputError;
    }
    const parsed = parseFloat(this.userAnswer);
    if (isNaN(parsed)) {
      return Grade.InputError;
    } else {
      if (parsed === this.problem.answer) {
        return Grade.RightAnswer;
      } else {
        return Grade.WrongAnswer;
      }
    }
  }
}
