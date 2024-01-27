import { Component, createComponent } from '@angular/core';
import { Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

export const routes: Routes = [
    {path:'create', component: CreateComponent},
    {path: 'read',component: ReadComponent},
];
