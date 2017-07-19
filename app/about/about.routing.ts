import {Routes, RouterModule} from '@angular/router';
import {AboutUserComponent} from './about-user.component';
import {AboutComponent} from './about.component';
import {ModuleWithProviders} from '@angular/core'
import {AboutSectionComponent} from './about-section.component';
const aboutRoutes:Routes=[
  {
    path:'about',
    component:AboutSectionComponent,

    children:[
      {
        path:'',
        component:AboutComponent
      },
      {
        path:':username',
        component:AboutUserComponent
      }
    ]
  }
  // {path:'about', component:AboutComponent},
  // {path:'about/:username', component:AboutUserComponent},
 ];

export const aboutRouting:ModuleWithProviders=RouterModule.forChild(aboutRoutes);