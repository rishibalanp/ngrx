import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from '../../shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-display',
  standalone: false,
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css',
})
export class CounterDisplayComponent implements OnInit,OnDestroy{
  counterValue!: number;
  name: string = '';
  subscription!: Subscription;
  counter$!: Observable<counterModel>; 
  constructor(private store: Store<{ counter: counterModel }>) {}

  ngOnInit(): void {
    this.subscription =  this.store.select('counter').subscribe((data) => {
      this.counterValue = data.counter;
      this.name = data.name;
    });
	// this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
	if(this.subscription){
		this.subscription.unsubscribe();
	}
  }
}
