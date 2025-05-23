import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideRouter, withDebugTracing } from '@angular/router';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
