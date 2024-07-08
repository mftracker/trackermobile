import type { CapacitorConfig } from '@capacitor/cli';

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
