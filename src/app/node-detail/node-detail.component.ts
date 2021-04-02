import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.css']
})
export class NodeDetailComponent implements OnInit {
  @Input() node: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  isDanger(prop: string) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }
  getType(prop: string) {
    return (this.isDanger(prop)) ? 'danger' : 'success';
  }
}
