import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/dashboard/contact/contact.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
];
