import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'crud-recipe',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
