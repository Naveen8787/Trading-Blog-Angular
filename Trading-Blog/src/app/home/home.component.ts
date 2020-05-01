import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
const ELEMENT_DATA: Contents[] = [
  {position: 1, name: 'Cotton', weight: 1, price: '5200'},
  {position: 2, name: 'Chilli', weight: 1, price: '8000'},
  {position: 3, name: 'Maize', weight: 1, price: '1600'},
  {position: 4, name: 'Turmeric', weight:1, price: '4100'},
  {position: 5, name: 'Paddy', weight: 1, price: '1400'},
  {position: 6, name: 'Wheat', weight: 1, price: '1500'},
  {position: 7, name: 'Silk', weight: 1, price: '5000'},
  {position: 8, name: 'Pulses', weight: 1, price: '1300'},
  {position: 9, name: 'Jowar', weight: 1, price: '1200'},
  {position: 10, name: 'Sugarcane', weight: 1, price: '2500'},
];

export interface Contents {
  name: string;
  position: number;
  weight: number;
  price: string;
}