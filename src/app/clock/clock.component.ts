import {Component, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  date: string;
  time: string;

  constructor() {
  }

  ngOnInit(): void {
    this.updateTime();
    this.interval();
  }

  private updateTime() {
    const date = new Date(Date.now());
    this.date = formatDate(date, 'EEEE, d LLLL yyyy', 'en');
    this.time = formatDate(date, 'H:mm', 'en');
  }

  private interval() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

}
