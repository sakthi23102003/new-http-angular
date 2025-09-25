import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [ ReactiveFormsModule,CommonModule],
  templateUrl: './contactform.html',
  styleUrls: ['./contactform.css']
})
export class ContactformComponent {
  queryForm: FormGroup;
  submittedQueries: any[] = [];
 
  faqs = [
    { number: '01', question: "How can I submit a query?", answer: "You can submit a query by filling out the form on this page and clicking the 'Post It' button." },
    { number: '02', question: "What information is required?", answer: "Please provide your first name, last name, email, phone number, and your query message." },
    { number: '03', question: "Is my information secure?", answer: "Yes, all information submitted through the form is kept confidential and secure." },
    { number: '04', question: "When will I get a response?", answer: "Our support team typically responds within 24-48 hours to all queries." },
    { number: '05', question: "Can I update my submitted query?", answer: "Currently, queries cannot be edited after submission. Please submit a new query if changes are needed." },
    { number: '06', question: "Do I need an account to submit a query?", answer: "No account is required. You can submit your queries directly through this form." },
  ];
//valid form field
  constructor(private fb: FormBuilder) {
    this.queryForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      query: ['', Validators.required]
    });
//CONSOLE
    this.queryForm.valueChanges.subscribe(val => {
      console.log('Live Form Values:', val);
    });
  }
 
 
  onSubmit() {
  if (this.queryForm.valid) {
    alert(' Your query has been submitted successfully!');
    console.log('Form Submitted:', this.queryForm.value); //correct
    this.queryForm.reset();                                  
  } else {
    alert('Please fill all required fields correctly.');
    this.queryForm.markAllAsTouched();     //wrong                
  }
}
 
}
 
 