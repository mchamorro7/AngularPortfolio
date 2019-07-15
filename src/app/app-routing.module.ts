import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/home/contact.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'project', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
