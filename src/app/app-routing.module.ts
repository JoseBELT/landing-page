import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'footer', component: FooterComponent},

  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
