import type { ReactElement } from 'react';
import type { Context } from '../types';
declare function ssrCollector(context: Context): {
    collect(app: ReactElement): any;
    toString(): string;
};
declare function clientProvider(context: Context): {
    cleanup(): void;
};
declare const _default: typeof ssrCollector | typeof clientProvider;
export default _default;
