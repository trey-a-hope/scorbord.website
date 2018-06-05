import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public logoUrl: string = '../assets/images/logo.png';
  count: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Navigate to the Admin page after 10 clicks.
  test = (): void => {
    this.count++;
    if(this.count == 10){
      this.router.navigateByUrl('/admin');
    }
  }

}
