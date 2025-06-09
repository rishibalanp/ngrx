import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../shared/store/counter.actions';
import { counterModel } from '../../shared/store/counter.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-counter',
  standalone: false,
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.css',
})
export class CustomCounterComponent {
  data: boolean = false;
  subscription!: Subscription;
  constructor(private store: Store<{ counter: counterModel }>) {}
  counterInput!: number;
  type: string = 'add';
  name: string = '';

  ngOnInit(): void {
    this.subscription = this.store.select('counter').subscribe((data) => {
      this.name = data.name;
    });
    // this.counter$ = this.store.select('counter');
  }
  Increment() {
    this.store.dispatch(
      customIncrement({ value: +this.counterInput, action: this.type })
    );
  }
}
