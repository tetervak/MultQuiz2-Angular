import {MultiplicationProblem} from '../multiplication-problem';
import {MultiplicationQuizService} from "../multiplication-quiz.service";
import {Component} from "@angular/core";

@Component({
  selector: 'app-right-answer',
  templateUrl: './right-answer.component.html',
  styleUrls: ['./right-answer.component.css', '../../assets/css/main.css']
})
export class RightAnswerComponent {
  problem: MultiplicationProblem;
  userAnswer: string;
  constructor(quiz: MultiplicationQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}
