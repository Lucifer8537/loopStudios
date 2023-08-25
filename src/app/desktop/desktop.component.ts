import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
})
export class DesktopComponent {
  width!: number;
  col!: number;
  @HostListener('window:resize', ['$event'])
  onResize = () => {
    this.width = window.innerWidth;
    console.log('width: ', this.width);
    this.col = Math.round(this.width / 410);
    console.log('width : ', this.col);
  };

  ngOnInit(): void {
    this.onResize();
  }
}
