
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions = [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5'],
      answer: '4'
    },
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris'],
      answer: 'Paris'
    },
    {
      question: 'What is 10 / 2?',
      options: ['5', '10', '20'],
      answer: '5'
    }
  ];

  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer: string = '';
  quizCompleted = false;

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  nextQuestion() {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.selectedAnswer = '';
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex === this.questions.length) {
      this.quizCompleted = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizCompleted = false;
  }
}
