import * as Sentry from '@sentry/browser';

export const ENV = 'test'; // production | test | staging

const fetchTimeout = 30 * 1000;
export const timeoutPromise = (fetchPromise, timeout = fetchTimeout) => {
  const abortPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('网络请求超时'));
    }, timeout);
  });

  return Promise.race([fetchPromise, abortPromise]);
};

export const allPromise = (promises, defaultValues) =>
  Promise.all(
    promises.map((p, i) =>
      p.catch(e => {
        Sentry.captureException(e);
        return defaultValues[i];
      }),
    ),
  );
