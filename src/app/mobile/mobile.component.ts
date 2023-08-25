import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent {
  menu!: boolean;
  onClickMenu = () => {
    this.menu = !this.menu;
  };
}
