import type { Plugin } from 'vite';
import type { ViteSsrPluginOptions } from './config';
import type { SsrOptions } from './dev/server';
declare const _default: (options?: ViteSsrPluginOptions & SsrOptions) => (Plugin & Record<string, any>)[];
export = _default;
