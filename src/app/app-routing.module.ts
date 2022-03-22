import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flights',
    loadChildren: () =>
      import('./flights/flights.module').then((module) => module.FlightsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./common/public.module').then((module) => module.PublicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
