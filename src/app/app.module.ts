import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { HttpClientModule } from '@angular/common/http';
import { SpesaDomicilioComponent } from './spesa-domicilio/spesa-domicilio.component';
import { CollaboraComponent } from './collabora/collabora.component';


import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/analytics';

import { FormsModule } from '@angular/forms';
import { DonazioniComponent } from './donazioni/donazioni.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  {
    path: 'spesa',
    component: SpesaDomicilioComponent,
    data: { title: 'Spesa a domicilio' },
  },
  {
    path: 'donazioni',
    component: DonazioniComponent,
    data: { title: 'Donazioni' },
  },
  {
    path: 'collabora',
    component: CollaboraComponent,
    data: { title: 'Collabora con noi' },
  },
  { path: '',
  component: MapsComponent,
  data: { title: 'Maps' },
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    SpesaDomicilioComponent,
    CollaboraComponent,
    DonazioniComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


