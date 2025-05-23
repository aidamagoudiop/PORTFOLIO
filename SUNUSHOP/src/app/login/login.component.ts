import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router){ }
  email = '';
  password = '';
  ngOnInit(): void{ }

  redirecToHome(){
    this.router.navigateByUrl("/home")
  }

  redirecTo(name :string){
    if(name=="login")
    this.router.navigateByUrl('/login')
    else
    this.router.navigateByUrl('/register')
  }

}
