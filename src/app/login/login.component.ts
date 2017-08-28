import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AppLoginComponent implements OnInit {

  userService: UserService;
  router: Router;
  usuario;
  password;
  error = '';

  constructor(router: Router, userService: UserService) {
    this.router = router;
    this.userService = userService;
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

  onSubmit(form) {
    if ( this.userService.validate( this.usuario, this.password ) ) {
      this.error = '';
      this.router.navigateByUrl('/navigate');
    } else {
      this.error = 'Error en el usuario o contraseña';
    }
  }

}
