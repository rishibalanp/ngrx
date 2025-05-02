import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
	changeName,
	decrement,
	increment,
	reset,
} from '../../shared/store/counter.actions';
import { counterModel } from '../../shared/store/counter.model';

@Component({
	selector: 'app-counter-button',
	standalone: false,
	templateUrl: './counter-button.component.html',
	styleUrl: './counter-button.component.css',
})
export class CounterButtonComponent {
	onRename() {
		this.store.dispatch(changeName({ name: 'Welcome rishi' }));
	}
	constructor(private store: Store<{ counter: counterModel }>) {}

	onReset() {
		this.store.dispatch(reset());
	}
	onIncrement() {
		this.store.dispatch(increment());
	}
	onDecrement() {
		this.store.dispatch(decrement());
	}
}
