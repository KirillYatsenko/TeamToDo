import { HttpHeaders } from "@angular/common/http";

export function getToken(){
    return localStorage.getItem('auth_token');
}

export function bareHeaders(){
    return new HttpHeaders({ 'Content-Type': 'application/json' });
}


export function authorizationHeaders()  {
    return new HttpHeaders(
            { 'Content-Type': 'application/json'
            , 'Authorization': `Bearer ${getToken()}` }
        )
}

export function responseTextAuthorizationOptions(): any{
    return {
        responseType:"text",
        headers:authorizationHeaders()
    }
} 

export function responseTextOptions(): any{
  return  {
        responseType:'text',
        headers:bareHeaders()
    }
}  