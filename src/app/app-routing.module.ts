import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AwsHomeComponent } from './aws/home/home.component';



const routes: Routes = [
  { path: 'aws', component:  AwsHomeComponent},
  { path: '**', component:  HomeComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { 


}
