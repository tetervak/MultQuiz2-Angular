import { Component } from '@angular/core';
import {MultiplicationQuizService} from '../multiplication-quiz.service';
import {MultiplicationProblem} from '../multiplication-problem';

@Component({
  selector: 'app-wrong-answer',
  templateUrl: './wrong-answer.component.html',
  styleUrls: ['./wrong-answer.component.css', '../../assets/css/main.css']
})
export class WrongAnswerComponent {
  problem: MultiplicationProblem;
  userAnswer: string;
  constructor(quiz: MultiplicationQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}
