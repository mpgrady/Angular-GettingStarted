import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//pages
import { WelcomeComponent } from './home/welcome.component';

//services & Modules
import { ProductGuardService } from './products/product-guard.service';
import { ProductModule } from './products/product.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([     
      {path: 'welcome', component : WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
