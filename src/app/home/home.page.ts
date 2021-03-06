import { Component,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slideWithNav',{static : false}) slideWithNav : IonSlides;

  sliderOne:any;

  slideOptions = {
    slidesPerView : 1,
    autoplay : true,
    delay: 1500
  }
  slideOptions1 = {
    slidesPerView : 2.5,
    autoplay : true,
    delay: 1500
  }


  constructor(public route:Router) {
    this.sliderOne={
        isBeginningSlide : true,
        isEndSlide :true,
        slidesItems : [{id :'slide1'},{id:"slide2"},{id:"slide3"},{id:"slide4"}]
    };
  }
      //Move to Next slide
    slideNext(object, slideView){
      slideView.slideNext(500).then(()=>{
      this.checkIfNavDisabled(object,slideView);
      });
    }
    //Move to previous slide
    slidePrev(object, slideView){
      slideView.slidePrev(500).then(()=>{
        this.checkIfNavDisabled(object, slideView);
      });
    }
    //Method called when slide is changed by drag or navigation
    SlideDidChange( object , slideView){
        this.checkIfNavDisabled(object, slideView);
    }
    //Call methods to check if slide is first or last to enable disbale navigation
    checkIfNavDisabled(object, slideView){

        this.checkisBeginning(object, slideView);
        this.checkisEnd(object,slideView)

    }
    checkisBeginning(object, slideView){
      slideView.isBeginning().then((istrue)=>{
      object.isBeginningSlide= istrue;
      });
    }

    checkisEnd(object , slideView){
      slideView.isEnd().then((istrue)=>{
      object.isEndSlide=istrue;
      });
    }
    celebrityInner(id){
        this.route.navigate(["/celebrityinner",id]);
    }
}
