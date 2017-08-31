// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosAplicativoComponent } from './components/usuarios-aplicativo/usuarios-aplicativo.component';
import { CrossworkGridComponent } from './components/shared/crosswork-grid/crosswork-grid.component';

// Services
import { IDataService } from './components/interfaces/idata-service';
import { UsuariosAplicativoService } from './components/usuarios-aplicativo/services/usuarios-aplicativo.service';

  const appRoutes: Routes = [
    {
      path: 'home',
      children: [
        { path: 'usuarios-aplicativo', component: UsuariosAplicativoComponent }
      ],
      component: HomeComponent
    }, {
      path:'', component: LoginComponent
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    UsuariosAplicativoComponent,
    CrossworkGridComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [{
      provide: 'IDataService', useClass: UsuariosAplicativoService, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
