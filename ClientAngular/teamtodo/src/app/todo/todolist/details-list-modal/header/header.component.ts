import { Component, OnInit, Input } from '@angular/core';
import { TodoUser } from '../../../../shared/models/TodoUser';
import { TodoList } from '../../../../shared/models/TodoList';
import { DetailsListModalComponent } from '../details-list-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() Modal: DetailsListModalComponent;
  
  BadgeTypes: string[] = ['primary','secondary','success','danger','warning','info','light','dark'];
  BadgeTypeIndex: number = 0;

  selectBadgeType(index: number) : string{
    if(index <= this.BadgeTypes.length){
      return this.BadgeTypes[index];
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
