import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private configServcie: ConfigService) { 
    this.baseInviteLink = window.location.origin + "/invitation";
  }

  baseInviteLink: string;

  generateInvitationLink(id: string) : string{
      let link = this.baseInviteLink + `/${id}`;
      return link;
  }

}
