import { LoginPageModule } from './pages/login/login.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
