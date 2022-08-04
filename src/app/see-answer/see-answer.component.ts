import { Component } from '@angular/core';
import {MultiplicationProblem} from '../multiplication-problem';
import {MultiplicationQuizService} from '../multiplication-quiz.service';

@Component({
  selector: 'app-see-answer',
  templateUrl: './see-answer.component.html',
  styleUrls: ['./see-answer.component.css', '../../assets/css/main.css']
})
export class SeeAnswerComponent {
  problem: MultiplicationProblem;
  constructor(quiz: MultiplicationQuizService) {
    this.problem = quiz.problem;
  }
}
