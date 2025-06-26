import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent } from './components/info/info.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent  } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contacts', component: ContactsComponent },
  //{ path: '', redirectTo: '/info', pathMatch: 'full' }, // ruta por defecto
  //{ path: '**', redirectTo: '/info' } // ruta wildcard (error)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
