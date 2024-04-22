import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Importiere das Hauptmodul deiner Anwendung
import { environment } from './environment'; // Importiere die Umgebungskonfiguration

if (environment.production) {
  enableProdMode(); // Aktiviere den Produktionsmodus, falls in der Umgebungskonfiguration angegeben
}

platformBrowserDynamic().bootstrapModule(AppModule) // Bootstrappe deine Angular-Anwendung mit dem AppModule
  .catch(err => console.error(err)); // Behandle Fehler, falls das Bootstrappen fehlschlägt
