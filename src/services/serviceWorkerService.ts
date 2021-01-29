export const register = () => {
  console.log('register');
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      } catch (err) {
        console.error('ServiceWorker registration failed: ', err);
      }
    });
  }
};

export const unregister = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.unregister();
    } catch (err) {
      console.error('ServiceWorker unregistration failed: ', err);
    }
  }
};
