import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChannelStepDetailsComponent } from './channel-step-details/channel-step-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelStepDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
