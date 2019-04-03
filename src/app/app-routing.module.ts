import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const routes = [
  { path: 'todo', component: AppComponent },
  { path: '', redirectTo: 'todo', pathMatch: 'full' }
];

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
