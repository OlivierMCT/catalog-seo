import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { ProductComponent } from './components/product/product.component';
import { CarService } from './services/car.service';

export const routes: Routes = [
  { path: 'a-propos',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent),
    data: { title: 'A Propos', description: 'Description de la page A Propos' } },
  {
    path: 'mon-compte',
    loadComponent: () => import('./components/account/account.component').then(m => m.AccountComponent),
    canActivate: [UserService.AUTHORIZE_GUARD],
    data: { title: 'Mon Compte', description: 'Description de la page Mon Compte' },
  },
  {
    path: 'nos-produits',
    loadComponent: () => import('./components/catalog/catalog.component').then(m => m.CatalogComponent),
    data: { title: 'Nos Produits', description: 'Description de la page Nos Produits' },
    children: [{
        path: ':id',
        loadComponent: () => import('./components/product/product.component').then(m => m.ProductComponent),
        //data: { title: 'Produit', description: 'Description de la page Produit' },
        resolve: { theCar: CarService.GET_CAR_RESOLVER }
      },
    ],
  },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent), data: { title: 'Contact', description: 'Description de la page Contact' } },
  { path: 'accueil', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent), data: { title: 'Accueil', description: 'Description de la page Accueil' } },
  { path: 'se-connecter', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent), data: { title: 'Se Connecter', description: 'Description de la page Se Connecter' } },
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent), data: { title: 'Accueil', description: 'Description de la page Accueil' } },


  { path: '**', redirectTo: '' },
];
