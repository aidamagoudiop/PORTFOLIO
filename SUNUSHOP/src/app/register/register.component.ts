import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

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
