import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NodeDetailComponent } from '../node-detail/node-detail.component';
@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent implements OnInit {
  @Input() node: any;
  constructor(private modalService: NgbModal) { }
  isDanger(prop: string): boolean {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }
  ngOnInit(): void {
  }

  open(node: any): void {
    const modal = this.modalService.open(NodeDetailComponent);
    modal.componentInstance.node = node;
  }
}
