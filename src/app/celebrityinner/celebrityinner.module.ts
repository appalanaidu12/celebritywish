import { FooterComponent } from './../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelebrityinnerPageRoutingModule } from './celebrityinner-routing.module';

import { CelebrityinnerPage } from './celebrityinner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebrityinnerPageRoutingModule
  ],
  declarations: [CelebrityinnerPage,FooterComponent]
})
export class CelebrityinnerPageModule {}
