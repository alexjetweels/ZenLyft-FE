import OneSignal from 'react-onesignal';

export default async function initializeOneSignal() {
  await OneSignal.init({
    appId: import.meta.env.VITE_ONE_SIGNAL_APP_ID,
    allowLocalhostAsSecureOrigin: true,
  });
  OneSignal.Slidedown.promptPush();
}
