import type { CapacitorConfig } from '@capacitor/cli';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

const config: CapacitorConfig = {
  appId: 'falay.you.tracker',
  appName: 'youTracker',
  webDir: 'www',
  plugins: {
    "FirebaseAuthentication": {
      "skipNativeAuth": false,
      "providers": [
        "google.com",
      ]
    }
  }
};

export default config;
