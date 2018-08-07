import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {authorizationHeaders } from '../request-options-helper';


@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private http: HttpClient, private configService: ConfigService) { 
    this.baseInviteUrl = window.location.origin +'/invitation';
    this.baseUrl = configService.getApiURI();
  }

  private baseUrl;
  private baseInviteUrl;
  private generateInvitationHashUrl = '/Invitation/GenerateInvitationHash';
  private acceptInvitationUrl = '/Invitation/AcceptInvitation';

  generateInvitationLink(id: string) : Observable<string>{
    let url = this.baseUrl + this.generateInvitationHashUrl

    return this.http.post<string>(url, `"${id}"`, {headers: authorizationHeaders()}
    ).pipe(
      map(result=>{
        return this.baseInviteUrl + `?id=${result}`;
      })
    )
  }

  acceptInvitation(id: string) : Observable<string>{
    let url = this.baseUrl+this.acceptInvitationUrl;
    
    return this.http.post(url,`"${id}"`,  {
      responseType:"text",
      headers: authorizationHeaders()
    });
  }

}
