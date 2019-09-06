import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-procesamiento',
  templateUrl: './procesamiento.component.html',
  styles: []
})
export class ProcesamientoComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.userProfile$.subscribe(perfil => {
      console.log(perfil);
    })
  }

}
