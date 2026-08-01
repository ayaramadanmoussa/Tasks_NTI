import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { BooksComponent } from './books/books';
import { CategoriesComponent } from './categories/categories';

import { About } from './about/about';
import { Contact } from './contact/contact';
import { Profile } from './profile/profile';

export const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'books',component: BooksComponent},
  {path: 'categories',component: CategoriesComponent},
  {path: 'about',component: About},
  {path: 'contact',component: Contact},
  {path: 'profile',component: Profile}
];