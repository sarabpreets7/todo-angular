import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './Mycomponents/inbox/inbox.component';
import { TodayComponent } from './Mycomponents/today/today.component';

const routes: Routes = [
  {path:"",component: InboxComponent},
  {path:"today",component: TodayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
