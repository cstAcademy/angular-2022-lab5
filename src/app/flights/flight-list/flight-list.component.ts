import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnInit {
  flights: any = [
    {
      from: 'BCN',
      to: 'OTP',
      price: '100$',
      duration: '2h30m',
    },
    {
      from: 'TFN',
      to: 'SVL',
      price: '50$',
      duration: '3h30m',
    },
    {
      from: 'CDG',
      to: 'LGA',
      price: '500$',
      duration: '10h30m',
    },
  ];
  selectedFlight: any;

  constructor() {}

  ngOnInit(): void {}

  flightSelected(event: any) {
    console.log(event);
    this.selectedFlight = event;
  }

}
