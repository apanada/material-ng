import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  firstName: string;
  lastName: string;
  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.firstName);
  }
}
