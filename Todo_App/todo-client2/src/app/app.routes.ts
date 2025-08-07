import { Routes } from '@angular/router';
import { Tasks } from './components/tasks/tasks';
import { CompletedTask } from './components/tasks/completed-task/completed-task';
import { AddTask } from './components/tasks/add-task/add-task';
import { Notfound } from './components/notfound/notfound';
import { TaskList } from './components/tasks/task-list/task-list';
import { Login } from './components/login/login';
import { authGuard } from './guards/authGuard';

export const routes: Routes = [
    { path: 'tasks', component: Tasks, canActivate: [authGuard] },
    { path: 'tasks/completed', component: CompletedTask, canActivate: [authGuard] },
    { path: 'tasks/add', component: AddTask, canActivate: [authGuard] },
    { path: 'tasks/edit/:id', component: AddTask, canActivate: [authGuard] },
    { path: 'login', component: Login },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: Notfound }
];
