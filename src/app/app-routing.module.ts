import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: AppComponent },
  {path: 'mylist', component: MyListComponent},
  {path: 'contact', redirectTo: '/about', pathMatch: 'full'},
  {path: '', redirectTo: '/product', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
