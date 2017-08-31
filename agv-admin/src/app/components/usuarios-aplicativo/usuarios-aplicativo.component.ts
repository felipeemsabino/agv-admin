import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuarios-aplicativo',
  templateUrl: './usuarios-aplicativo.component.html',
  styleUrls: ['./usuarios-aplicativo.component.css']
})
export class UsuariosAplicativoComponent implements OnInit {

 gridTitle: string = "Cadastro de Usuarios do Aplicativo";

  object: any = {};

  constructor() { }

  ngOnInit() {
    //this.userService.userIsLogged();
  }

  public updateObjectParameter(object: any):void {
	  this.object = object;
    console.log('Updating parameter... ', this.object);
    console.log('Abrir tela de edicao para esse objeto que foi passado como parametro');
  }

}