import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-main-nav>
                 <router-outlet></router-outlet>
              </app-main-nav>`,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
