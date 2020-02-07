import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MaincantainerComponent } from './maincantainer/maincantainer.component';

import { RouterModule, Routes } from '@angular/router';

// router start here

const appRoutes: Routes = [
  { path: '', component: MaincantainerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactusComponent },
];

// end router

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
