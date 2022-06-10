import { createElement } from 'react';
// @ts-ignore
import createCache from '@emotion/cache';
// @ts-ignore
import { CacheProvider } from '@emotion/react';
function getCache() {
    const cache = createCache({ key: 'css' });
    cache.compat = true;
    return cache;
}
async function ssrCollector(context) {
    // A subdependency of this dependency calls Buffer on import,
    // so it must be imported only in Node environment.
    // https://github.com/emotion-js/emotion/issues/2446
    // @ts-ignore
    let createEmotionServer = await import('@emotion/server/create-instance');
    createEmotionServer = createEmotionServer.default || createEmotionServer;
    const cache = getCache();
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
    return {
        collect(app) {
            return createElement(CacheProvider, { value: cache }, app);
        },
        toString(html) {
            const emotionChunks = extractCriticalToChunks(html);
            return constructStyleTagsFromChunks(emotionChunks);
        },
    };
}
function clientProvider(context) {
    const cache = getCache();
    return {
        provide(app) {
            return createElement(CacheProvider, { value: cache }, app);
        },
    };
}
// @ts-ignore
export default import.meta.env.SSR ? ssrCollector : clientProvider;
