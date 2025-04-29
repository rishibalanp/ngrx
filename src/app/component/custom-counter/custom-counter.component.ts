import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../shared/store/counter.actions';

@Component({
	selector: 'app-custom-counter',
	standalone: false,
	templateUrl: './custom-counter.component.html',
	styleUrl: './custom-counter.component.css',
})
export class CustomCounterComponent {
	data: boolean = false;
	constructor(private store: Store<{ counter: { counter: number } }>) {}
	counterInput!: number;
  type: string = "add";
	Increment() {
		this.store.dispatch(customIncrement({value: +this.counterInput,action: this.type}));
	}
}
