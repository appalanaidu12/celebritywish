import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelebrityinnerPage } from './celebrityinner.page';

const routes: Routes = [
  {
    path: '',
    component: CelebrityinnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelebrityinnerPageRoutingModule {}
