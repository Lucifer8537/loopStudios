import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  width!: number;
  mobileView!: boolean;
  @HostListener('window:resize', ['$event'])
  onResize = () => {
    this.width = screen.width;
    this.mobileView = this.width < 679 || window.innerWidth < 679;
  };

  ngOnInit(): void {
    this.onResize();
  }
}
