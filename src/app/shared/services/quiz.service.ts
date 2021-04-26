import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  apiUrlCategories: string = 'https://opentdb.com/api_category.php';
  apiUrlQuiz: string = 'https://opentdb.com/api.php'

  quizCategories$: BehaviorSubject<any> = new BehaviorSubject(null);
  
  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<any> {
    return this.httpClient.get(this.apiUrlCategories).pipe(tap(categories => {
      this.quizCategories$.next(categories);
    }));
  }

  getQuiz(params): Observable<any>{
    return this.httpClient.get(this.apiUrlQuiz, {params: {...params, ...{type:'boolean'}}});
  }

  
}
