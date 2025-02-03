import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <p>Counter : {{ counter }}</p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

    <hr />
  `,
  standalone: false,

})
export class CounterComponent {
  // constructor() {}
  public title: string = 'Container component';

  public counter = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter = (): void => {
    this.counter = 10;
  };
}
