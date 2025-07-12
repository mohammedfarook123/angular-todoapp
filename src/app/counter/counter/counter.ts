import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  countVar = 0;
  update() {
    
      this.countVar++;
    
  }
}
