import { createSsrServer } from './server';
export declare const startServer: (options: Parameters<typeof createSsrServer>[0]) => Promise<import("vite").ViteDevServer>;
export { createSsrServer };
export type { SsrOptions } from './server';
