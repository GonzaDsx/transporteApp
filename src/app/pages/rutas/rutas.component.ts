import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  urlS: string[];
  idUser: string;
  constructor() {
    var url = window.location.toString();
    this.urlS = url.split('/');
    /*for(var i = 0; i < urlS.length; i++) {
      console.log(urlS[i]);    
    }   */
    //console.log(this.urlS[4]);
    this.idUser = this.urlS[4];    
  }

  ngOnInit(): void {    
  }

}
