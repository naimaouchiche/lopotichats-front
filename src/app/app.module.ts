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
import { UpdateKittenComponent } from './update-kitten/update-kitten.component';
import { FormsModule } from '@angular/forms';
import { AdoptedKittenListComponent } from './home-page/adopted-kitten-list/adopted-kitten-list.component';
import { AdoptedKittenItemComponent } from './home-page/adopted-kitten-list/adopted-kitten-item/adopted-kitten-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    // BorderCardDirective,
    kittenTypeColorPipe,
    HomePageComponent,
    UnadoptedKittenListComponent,
    UnadoptedKittenItemComponent,
    KittenDetailsPageComponent,
    UpdateKittenComponent,
    AdoptedKittenListComponent,
    AdoptedKittenItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
