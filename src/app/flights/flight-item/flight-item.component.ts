import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.scss'],
})
export class FlightItemComponent implements OnInit {
  @Input() flight: any;
  @Output() flightDetailsRequested: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFlightClicked() {
    this.flightDetailsRequested.emit(this.flight);
  }
}
