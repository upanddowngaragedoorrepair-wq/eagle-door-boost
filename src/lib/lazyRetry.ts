import { lazy, type ComponentType } from 'react';

const RELOAD_KEY = 'chunk-reload-at';

/**
 * Wraps React.lazy so that a failed dynamic import (usually a stale cached
 * index.html pointing at chunk hashes from a previous deploy) retries once,
 * then force-reloads the page to pick up the fresh asset manifest.
 */
export function lazyRetry<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      return await factory();
    } catch (err) {
      // one silent retry (handles transient network blips)
      try {
        return await factory();
      } catch {
        const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
        if (Date.now() - last > 10000) {
          sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
          window.location.reload();
          // never resolves; page is reloading
          return await new Promise<{ default: T }>(() => {});
        }
        throw err;
      }
    }
  });
}
