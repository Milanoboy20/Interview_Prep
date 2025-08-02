import { Routes } from '@angular/router';
import { Tasks } from './components/tasks/tasks';
import { Notfound } from './notfound/notfound';
import { AddTask } from './components/tasks/add-task/add-task';

export const routes: Routes = [
    { path: 'tasks', component: Tasks },
    { path: 'tasks/completed', component: Tasks },
    { path: 'tasks/add', component: AddTask },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: '**', component: Notfound }
];
