import { Routes } from '@angular/router';
import {StudentListComponent} from "./student/student-list/student-list.component";
import {StudentCreateComponent} from "./student/student-create/student-create.component";

export const routes: Routes = [
  // { path: '', redirectTo: 'student-list', pathMatch: 'full' },
  { path: 'student-list', component: StudentListComponent},
  { path: 'create-student', component: StudentCreateComponent},
];
