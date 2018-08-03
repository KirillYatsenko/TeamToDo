import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() UserName: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
}
