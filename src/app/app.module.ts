import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnadoptedKittenListComponent } from './home-page/unadopted-kitten-list/unadopted-kitten-list.component';
import { UnadoptedKittenItemComponent } from './home-page/unadopted-kitten-list/unadopted-kitten-item/unadopted-kitten-item.component';
import { KittenDetailsPageComponent } from './kitten-details-page/kitten-details-page.component';
import { BorderCardDirective } from './border-card.directive';
import { kittenTypeColorPipe } from './kitten-type-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // BorderCardDirective,
    kittenTypeColorPipe,
    HomePageComponent,
    UnadoptedKittenListComponent,
    UnadoptedKittenItemComponent,
    KittenDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
