import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HeaderOneComponent } from './components/layouts/header-one/header-one.component';
import { OnepageNavbarComponent } from './components/layouts/onepage-navbar/onepage-navbar.component';
import { AboutOneComponent } from './components/pages/about/about-one.component';
import { BloodBanksComponent } from './components/pages/bloodbanks/bloodbanks.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { LiveTrackerComponent } from './components/pages/live-tracker/live-tracker.component';
import { LiveDataComponent } from './components/layouts/live-data/live-data.component';
import { BloodbankDashboardComponent } from './components/pages/bloodbank-dashboard/bloodbank-dashboard.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { AdminMenuComponent } from './components/layouts/admin-menu/admin-menu.component';
import { TopBarComponent } from './components/layouts/top-bar/top-bar.component';
import { AdminTopBarComponent } from './components/layouts/admin-top-bar/admin-top-bar.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    HomeOneComponent,
    HeaderOneComponent,
    OnepageNavbarComponent,
    AboutOneComponent,
    BloodBanksComponent,
    AppointmentComponent,
    FaqComponent,
    ContactComponent,
    BlogOneComponent,
    BlogDetailsComponent,
    CartComponent,
    CheckoutComponent,
    ErrorComponent,
    ComingSoonComponent,
    LiveTrackerComponent,
    LiveDataComponent,
    BloodbankDashboardComponent,
    AdminComponent,
    AdminMenuComponent,
    TopBarComponent,
    AdminTopBarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
