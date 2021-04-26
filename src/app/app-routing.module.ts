import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationTabComponent } from './components/generation-tab/generation-tab.component';
import { PassQuizComponent } from './components/pass-quiz/pass-quiz.component';

const routes: Routes = [
  {
    path: 'generate',
    component: GenerationTabComponent
  },
  {
    path: 'pass',
    component: PassQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
