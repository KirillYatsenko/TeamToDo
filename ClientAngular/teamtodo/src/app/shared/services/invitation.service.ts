import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private http: HttpClient, private configServcie: ConfigService) { 
    this.baseInviteLink = window.location.origin +'/invitation';
  }

  baseInviteLink: string;

  generateInvitationLink(id: string) : Observable<string>{
    let url = this.configServcie.getApiURI() + '/Invitation/GenerateInvitationHash'
    let authToken = localStorage.getItem('auth_token');

    return this.http.post<string>(url, `"${id}"`,
      {
        headers:new HttpHeaders(
          { 'Content-Type': 'application/json'
          , 'Authorization': `Bearer ${authToken}` }
        )
      }
    ).pipe(
      map(result=>{
        return this.baseInviteLink + `?id=${result}`;
      })
    )
  }

  acceptInvitation(id: string) : Observable<string>{
    let url = this.configServcie.getApiURI()+'/Invitation/AcceptInvitation';
    return this.http.post(url,`"${id}"`,  {
      responseType:"text",
      headers:new HttpHeaders(
       { 'Content-Type': 'application/json'
        , 'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
       }
      )
    });
  }

}
