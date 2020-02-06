import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public auth: boolean = false; //variável que indica se o usuário está ou não logado
  currentUrl = this.router.url;

  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(this.currentUrl);
  }

}