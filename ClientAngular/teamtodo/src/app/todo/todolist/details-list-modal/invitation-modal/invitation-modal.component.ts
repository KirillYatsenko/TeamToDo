import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invitation-modal',
  templateUrl: './invitation-modal.component.html',
  styleUrls: ['./invitation-modal.component.css']
})
export class InvitationModalComponent implements OnInit {

  @Input() InvitationLink : string;

  constructor() { }

  ngOnInit() {
  }

}
