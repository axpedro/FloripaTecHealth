import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
login ={ codigoUsuario:"", senhaUSuario:""


};

constructor(private router: Router){


}

onSubmit(){
  if(this.login.codigoUsuario && this.login.senhaUSuario)
  this.router.navigate(['/home']);


}



}
