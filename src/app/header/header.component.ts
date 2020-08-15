import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() type: String;
  @Output() getTypeChange = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  change(value) {
    this.getTypeChange.emit(value);
  }

}