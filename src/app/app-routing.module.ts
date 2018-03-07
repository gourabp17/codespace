import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AwsHomeComponent } from './aws/home/home.component';
import { Su4dzQgr1yComponent } from './aws/su4dz-qgr1y/su4dz-qgr1y.component';
import { RedirectComponent } from './redirect/redirect.component';


const routes: Routes = [
  { path: 'aws/su4dz-qgr1y', component:  Su4dzQgr1yComponent},
  { path: 'aws', component:  AwsHomeComponent},
  { path: 'ty', component:  RedirectComponent},
  { path: '**', component:  HomeComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { 


}
