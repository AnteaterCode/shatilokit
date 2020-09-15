import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sh-autocompletedemo',
  templateUrl: './autocompletedemo.component.html',
  styleUrls: ['./autocompletedemo.component.scss']
})
export class AutocompletedemoComponent implements OnInit {
  dataSource = [];
  constructor() {
    // {label: '55', value: 'drer'}, {label: 'sdnglkangrkj', value: 'drer'}
    this.dataSource.push({label: '55', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    console.log(this.dataSource);
  }

  ngOnInit() {
  }

}
