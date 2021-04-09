import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Input() currentPage:any;
  constructor(public route: Router) { }

  ngOnInit() {}
  navigateURL(page){
      this.route.navigate(["/"+page]);
  }
}
