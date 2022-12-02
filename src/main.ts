import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      RouterModule.forRoot(
        [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./app/home/home.component').then((m) => m.HomeComponent),
          },
          {
            path: 'list',
            loadChildren: () =>
              import('./app/todo-list/todo-list.module').then(
                (m) => m.TodoListModule
              ),
          },
          {
            path: '**',
            loadComponent: () =>
              import('./app/not-found/not-found.component').then(
                (m) => m.NotFoundComponent
              ),
          },
        ]
        /*    { enableTracing: true } */
      )
    ),
  ],
})
  .then((_) => console.log('Bootstraped standalone'))
  .catch((e) => console.log(e));
