import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'infinito',
    loadChildren: () => import('./filmes/infinito/infinito.module').then( m => m.InfinitoPageModule)
  },
  {
    path: 'barraca-beijo',
    loadChildren: () => import('./filmes/barraca-beijo/barraca-beijo.module').then( m => m.BarracaBeijoPageModule)
  },
  {
    path: 'luca',
    loadChildren: () => import('./filmes/luca/luca.module').then( m => m.LucaPageModule)
  },
  {
    path: 'space-jam',
    loadChildren: () => import('./filmes/space-jam/space-jam.module').then( m => m.SpaceJamPageModule)
  },
  {
    path: 'velozes-furiosos',
    loadChildren: () => import('./filmes/velozes-furiosos/velozes-furiosos.module').then( m => m.VelozesFuriososPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
