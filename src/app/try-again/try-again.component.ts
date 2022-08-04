import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MultiplicationProblem} from '../multiplication-problem';
import {MultiplicationQuizService} from '../multiplication-quiz.service';
import {navigate} from '../navigate';

@Component({
  selector: 'app-try-again',
  templateUrl: './try-again.component.html',
  styleUrls: ['./try-again.component.css', '../../assets/css/main.css']
})
export class TryAgainComponent {
  problem: MultiplicationProblem;
  constructor(
    private quiz: MultiplicationQuizService,
    private readonly router: Router) {
    this.problem = quiz.problem;
  }
  public check(userAnswer: string) {
    this.quiz.userAnswer = userAnswer;
    console.log('userAnswer=[' + userAnswer + ']');
    navigate(this.quiz.gradeQuiz(), this.router);
  }
}

