import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptedKittenItemComponent } from './home-page/adopted-kitten-list/adopted-kitten-item/adopted-kitten-item.component';
import { AdoptedKittenListComponent } from './home-page/adopted-kitten-list/adopted-kitten-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KittenDetailsPageComponent } from './kitten-details-page/kitten-details-page.component';
import { UpdateKittenComponent } from './update-kitten/update-kitten.component';


const routes: Routes = [{
  path: '',
  component: HomePageComponent
}, { path: 'cat/:id', component: KittenDetailsPageComponent },
{ path: 'update/:id', component: UpdateKittenComponent},
{path: 'adopted', component: AdoptedKittenListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
