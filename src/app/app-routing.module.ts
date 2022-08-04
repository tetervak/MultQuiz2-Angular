import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewProblemComponent} from "./new-problem/new-problem.component";
import {RightAnswerComponent} from "./right-answer/right-answer.component";
import {WrongAnswerComponent} from "./wrong-answer/wrong-answer.component";
import {SeeAnswerComponent} from "./see-answer/see-answer.component";
import {InputErrorComponent} from "./input-error/input-error.component";
import {TryAgainComponent} from "./try-again/try-again.component";

const routes: Routes = [
  {path: 'new-problem', component: NewProblemComponent},
  {path: 'right-answer', component: RightAnswerComponent},
  {path: 'wrong-answer', component: WrongAnswerComponent},
  {path: 'see-answer', component: SeeAnswerComponent},
  {path: 'input-error', component: InputErrorComponent},
  {path: 'try-again', component: TryAgainComponent},
  {path: '', redirectTo: 'new-problem', pathMatch: 'full'},
  {path: '**', redirectTo: 'new-problem'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
