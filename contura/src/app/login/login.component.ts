import { PasswordValidators } from './password-validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;

  //username ='';
  //password = '';

  loginUser(){
    if(this.userForm.controls['username'].value == "hammy233" && this.userForm.controls['password'].value == "pass"){
      alert("Welcome");
    }
    else{
      alert("Check your creidentials")
    }
  }

  loginValid(){
    if(this.userForm.controls['username'].value){
      return false;
    }
    else{
      return true;
    }
  }

  containsSpecialChars(str:string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  containsNumber(str:string){
    const numbers = /1234567890/;
    return numbers.test(str);
  }


  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username:['',Validators.required],
      password:[ '', Validators.compose([
        // 1. Password Field is Required
        Validators.required,
        // 2. check whether the entered password has a number
        PasswordValidators.patternValidator(/\d/, { hasNumber: true }),
        // 3. check whether the entered password has a special character
        PasswordValidators.patternValidator(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, { hasSpecialCharacters: true }),
        // 4. Has a minimum length of 10 characters
        Validators.minLength(10)])
     ],
    })
  }

}
