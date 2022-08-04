import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { NewProblemComponent } from './new-problem/new-problem.component';
import { RightAnswerComponent } from './right-answer/right-answer.component';
import { SeeAnswerComponent } from './see-answer/see-answer.component';
import { TryAgainComponent } from './try-again/try-again.component';
import { WrongAnswerComponent } from './wrong-answer/wrong-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InputErrorComponent,
    NewProblemComponent,
    RightAnswerComponent,
    SeeAnswerComponent,
    TryAgainComponent,
    WrongAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
