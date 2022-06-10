/// <reference types="node" />
import type { ServerResponse } from 'http';
import connect from 'connect';
import { InlineConfig, ViteDevServer } from 'vite';
import type { WriteResponse } from '../utils/types';
export interface SsrOptions {
    plugin?: string;
    ssr?: string;
    getRenderContext?: (params: {
        url: string;
        request: connect.IncomingMessage;
        response: ServerResponse;
        resolvedEntryPoint: Record<string, any>;
    }) => Promise<WriteResponse>;
}
export declare const createSSRDevHandler: (server: ViteDevServer, options?: SsrOptions) => connect.NextHandleFunction;
export declare function createSsrServer(options?: InlineConfig & {
    polyfills?: boolean;
}): Promise<ViteDevServer>;
export declare function printServerInfo(server: ViteDevServer): void;
