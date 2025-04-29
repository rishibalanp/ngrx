import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../shared/store/counter.actions';

@Component({
	selector: 'app-counter-button',
	standalone: false,
	templateUrl: './counter-button.component.html',
	styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
	constructor(private store: Store<{counter:{counter:number}}>){

	}

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
