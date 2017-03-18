import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './main/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ProfileService } from './services/profile.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaterialCardsComponent } from './pages/material-cards/material-cards.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BsGridsComponent } from './pages/bootstrap/bs-grids/bs-grids.component';
import { BsNavbarsComponent } from './pages/bootstrap/bs-navbars/bs-navbars.component';
import { BsCarouselComponent } from './pages/bootstrap/bs-carousel/bs-carousel.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'mat-cards', component: MaterialCardsComponent },
  { path: 'bs-grids', component: BsGridsComponent },
  { path: 'bs-navbars', component: BsNavbarsComponent },
  { path: 'bs-carousel', component: BsCarouselComponent },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    MaterialCardsComponent,
    ChartsComponent,
    WelcomeComponent,
    BsGridsComponent,
    BsNavbarsComponent,
    BsCarouselComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    MaterialModule,
    NgxChartsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
