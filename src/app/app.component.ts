import { Component, OnInit } from '@angular/core';
import { DataConsolidatorService } from './data-consolidator-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angulartest';
  rows:any;

  
  constructor(
    public dataConsolidator:DataConsolidatorService
  ){
  }
  
  ngOnInit() {
    // Get data
    this.rows = this.dataConsolidator.getAllData()
    console.log(this.rows)
    
  }
}