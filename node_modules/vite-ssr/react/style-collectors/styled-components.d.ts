import type { ReactElement } from 'react';
import type { Context } from '../types';
declare function ssrCollector(context: Context): {
    collect(app: ReactElement): any;
    toString(): any;
    cleanup(): void;
};
declare const _default: typeof ssrCollector | null;
export default _default;
