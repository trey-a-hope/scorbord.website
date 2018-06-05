import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {     
  contactForm : FormGroup;
  sub: any;

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe( params => {
      //Initialize contact form.
      this.contactForm = new FormGroup({
          fullName: new FormControl('', [ Validators.required ]),
          email   : new FormControl('', [ Validators.required, Validators.email ]),
          message : new FormControl(params['message'], [ Validators.required ])
      });
    });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  onSubmit() {

      let formIsValid     : Boolean           = true;

      let fullNameControl : AbstractControl   = this.contactForm.controls.fullName;
      let emailControl    : AbstractControl   = this.contactForm.controls.email;
      let messageControl  : AbstractControl   = this.contactForm.controls.message;

      //Check for any errors on message control.
      if(messageControl.errors != null && messageControl.errors.required == true){
          formIsValid = false;
          alert('Error, message is required.');
      }

      //Check for any errors on email control.
      if(emailControl.errors != null) {
          formIsValid = false;
          if(emailControl.errors.required == true){
            alert('Error, email is required.');
          }
          else if(emailControl.errors.email == true){
            alert('Error, email not valid.');
          }
      }

      //Check for any errors on full name control.
      if(fullNameControl.errors != null && fullNameControl.errors.required == true){
          formIsValid = false;
          alert('Error, full name is required.');
      }

      if(formIsValid){
          let to      : string = 'tr3umphant.designs@gmail.com';
          let subject : string = 'New Contact - ' + fullNameControl.value;
          let from    : string = emailControl.value;
          let message : string = messageControl.value;

          this.emailService.sendEmail(to, subject, from, message).subscribe(
              res => {
                alert('Message sent, I will respond shortly.')
              },
              error => {
                alert('Error, your message could not be sent at this time.')
                console.log(error);
              } 
          )
      }
  }
}