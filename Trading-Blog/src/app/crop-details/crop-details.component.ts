import { Component, OnInit } from '@angular/core';
import { cropInterface } from '../cropInterface';
import { crops } from '../Crops';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css']
})
export class CropDetailsComponent implements OnInit {

  constructor() { }
  crop:cropInterface[];
  searchText;
  ngOnInit(): void {
    this.crop = crops;
  }
}