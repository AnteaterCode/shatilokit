import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sh-autocompletedemo',
  templateUrl: './autocompletedemo.component.html',
  styleUrls: ['./autocompletedemo.component.scss']
})
export class AutocompletedemoComponent implements OnInit {
  dataSource = [{label: '11213', value: 'drer'}];
  constructor() {

  }

  ngOnInit() {
  }

}
