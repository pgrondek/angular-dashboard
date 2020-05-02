import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  hour: number;
  minute: number;

  constructor() {
  }

  ngOnInit(): void {
    this.updateTime();
    this.interval();
  }

  private updateTime() {
    const date = new Date(Date.now());
    this.hour = date.getHours();
    this.minute = date.getMinutes();
  }

  private interval() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

}
