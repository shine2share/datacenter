import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();
  refresh(): void {
    this.onRefresh.emit();
  }
}
