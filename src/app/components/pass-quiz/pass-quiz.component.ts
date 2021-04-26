import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-pass-quiz',
  templateUrl: './pass-quiz.component.html',
  styleUrls: ['./pass-quiz.component.scss']
})
export class PassQuizComponent implements OnInit {

  results;
  answerValue: boolean;
  counter = 0;

  @Input() value;

  constructor(private route: ActivatedRoute,
    private quizService: QuizService) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(switchMap((params) => {
      return this.quizService.getQuiz(params)
    })).subscribe(res => {
      this.results = res.results;
    });
  }

  onClick(): void {
    this.answerValue = true;
    console.log(this.answerValue);
  }
}
