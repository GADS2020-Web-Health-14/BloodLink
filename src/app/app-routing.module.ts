import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { AboutOneComponent } from './components/pages/about/about-one.component';
import { BloodBanksComponent } from './components/pages/bloodbanks/bloodbanks.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { LiveTrackerComponent } from './components/pages/live-tracker/live-tracker.component';
import { BloodbankDashboardComponent } from './components/pages/bloodbank-dashboard/bloodbank-dashboard.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'about', component: AboutOneComponent},
    {path: 'bloodbanks', component: BloodBanksComponent},
    {path: 'appointment', component: AppointmentComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'blog', component: BlogOneComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'live-tracker', component: LiveTrackerComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'user-dashboard', component: BloodbankDashboardComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
