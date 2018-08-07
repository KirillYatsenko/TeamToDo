import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../shared/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() UserName: string;

  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit() {
  }

  logout(){
    this.accountService.logout();
    this.router.navigate(['/login']);
  }
}
