import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { InvitationService } from '../../../shared/services/invitation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  private subscription: Subscription;
  private id: string;
  errors: string;

  constructor(private activatedRoute: ActivatedRoute,
  private invitationService: InvitationService,
  private router : Router) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any)=>{
          this.id = param['id'];
      }
    );

   this.invitationService.acceptInvitation(this.id)
    .subscribe(result=>{
      if(result){
        this.router.navigate(['/todolists'],{queryParams: {open: result}});                         
      }
    },errors=>{
      this.errors = errors["error"];
    });
  }

}
