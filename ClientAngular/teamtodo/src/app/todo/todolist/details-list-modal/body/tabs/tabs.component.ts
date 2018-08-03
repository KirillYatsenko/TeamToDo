import { Component, OnInit,Input } from '@angular/core';
import { DetailsListModalComponent } from '../../details-list-modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() Modal: DetailsListModalComponent;

  constructor() { }

  ngOnInit() {
  }

}
