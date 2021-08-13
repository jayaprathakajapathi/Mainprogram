import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiceitemComponent } from './riceitem/riceitem.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
