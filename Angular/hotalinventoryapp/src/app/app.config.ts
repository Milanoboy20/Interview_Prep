import { ApplicationConfig, Inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './request-interceptor';
import { InitService } from './init';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptors([requestInterceptor]), withFetch()),
    provideAppInitializer(() => {Inject(initFactory)})
  ]
};


function initFactory(initService: InitService) {
  return () => initService.init();
}