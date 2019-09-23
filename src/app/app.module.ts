import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvertEUROPipe, ConvertUSDPipe } from './convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertEUROPipe,
    ConvertUSDPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
