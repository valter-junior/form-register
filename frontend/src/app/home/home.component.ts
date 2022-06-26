import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  register: Register = new Register()

  constructor(private registerService: RegisterService, 
    private router: Router) {}



  ngOnInit(): void {
  
  }

  goToPage():void{
    this.router.navigate(['/registered']);
  }

  goToError():void{
    this.router.navigate(['/error'])
  }

  saveRegister(){
    this.registerService.createRegister(this.register).subscribe(data => { 
      if(data){
        this.goToPage();
      }
      console.log(data) 
    }, error => {
      this.goToError()
    })
  }

  onSubmit(){
    if(this.register.name != null && this.register.email != null && this.register.phone != null ){
      console.log(this.register)
      this.saveRegister()     
    }
  }
}

