import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

function sendMail() {
  var link = "mailto:me@example.com"
           + "?cc=myCCaddress@example.com"
           + "&subject="
           + "&body="
  ;
  
  window.location.href = link;
}