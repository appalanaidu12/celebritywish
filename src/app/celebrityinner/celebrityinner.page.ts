import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-celebrityinner',
  templateUrl: './celebrityinner.page.html',
  styleUrls: ['./celebrityinner.page.scss'],
})
export class CelebrityinnerPage implements OnInit {
  celebrityId:any;
  constructor(public activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((params : ParamMap)=>{
    this.celebrityId=params.get('id');
    console.log(this.celebrityId);
    });
  }

}
