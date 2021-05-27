import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TransfersComponent } from './components/transfers/transfers.component';
import { AngularIbanModule } from 'angular-iban';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeleteTransfersComponent } from './components/transfers/delete-transfers/delete-transfers.component';
import { UpdateTransfersComponent } from './components/transfers/update-transfers/update-transfers.component';
import { ViewTransfersComponent } from './components/transfers/view-transfers/view-transfers.component';
import { SearchPipe } from './pipes/search.pipe';
import { NumberFormatterPipe } from './pipes/numberformatter.pipe';
import { CustomFormsModule } from 'ng2-validation';
import { SortPipe } from './pipes/sort.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TransfersComponent,
    NavbarComponent,
    DeleteTransfersComponent,
    UpdateTransfersComponent,
    ViewTransfersComponent,
    SearchPipe,
    NumberFormatterPipe,
    SortPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AngularIbanModule,
    CustomFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
