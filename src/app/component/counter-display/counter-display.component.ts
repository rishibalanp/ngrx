import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-counter-display',
	standalone: false,
	templateUrl: './counter-display.component.html',
	styleUrl: './counter-display.component.css'
})
export class CounterDisplayComponent implements OnInit{
	counterValue!: number ;
constructor(private store: Store<{counter:{counter:number}}>){

}

ngOnInit(): void {
	this.store.select('counter').subscribe(data=>{    
    this.counterValue = data.counter;
	})
}
}
