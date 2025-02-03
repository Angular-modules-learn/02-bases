import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = ['Spiterman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHero: string | undefined

  removeLastHero(): void {
    this.deletedHero= this.heroNames.pop();
console.log(this.deletedHero);
  }
}
