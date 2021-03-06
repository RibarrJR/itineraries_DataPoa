import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusComponent } from './pages/bus/bus.component';
import { LotacaoComponent } from './pages/lotacao/lotacao.component';
import { HomeComponent } from './pages/home/home.component';
import {AgmCoreModule} from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { ItinerariesService } from './services/itineraries.service';
import { DirectionMapComponent } from './components/direction-map/direction-map.component';
import { ListLinesComponent } from './components/list-lines/list-lines.component';
import { SearchListPipe } from './components/list-lines/search-list.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LotacaoComponent,
    HomeComponent,
    BusComponent,
    DirectionMapComponent,
    ListLinesComponent,
    SearchListPipe,
    NavbarComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    NgbPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyAO82vHetDZg9bUtU0Dl5gwapIINbCJLOM"
    }),
    AgmDirectionModule,
    AppRoutingModule,

  ],
  providers: [ItinerariesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
