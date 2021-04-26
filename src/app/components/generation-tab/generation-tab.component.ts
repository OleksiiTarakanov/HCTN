import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-generation-tab',
  templateUrl: './generation-tab.component.html',
  styleUrls: ['./generation-tab.component.scss']
})
export class GenerationTabComponent implements OnInit {

  categoryName: string;
  categorysArray = [];
  quizForm: FormGroup = new FormGroup({});


  constructor(
    private readonly quizService: QuizService,
    private readonly formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getCategories();
    this.quizFormBuild();
  }

  quizFormBuild(): void{
    this.quizForm = this.formBuilder.group({
      amount: this.formBuilder.control('', Validators.required),
      category: this.formBuilder.control('', Validators.required),
      difficulty: this.formBuilder.control('', Validators.required)
    });
  }

  getCategories():void {
    this.quizService.getAllCategories().subscribe(res => {
      let categorys = res;
      this.categorysArray = categorys.trivia_categories;
    })
  }

  onSubmit(): void {
    this.router.navigate(['/pass'],{queryParams: this.quizForm.value})
  }

}
