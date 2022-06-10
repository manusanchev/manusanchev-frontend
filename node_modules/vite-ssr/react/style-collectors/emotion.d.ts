import type { Context } from '../types';
import { ReactElement } from 'react';
declare function ssrCollector(context: Context): Promise<{
    collect(app: ReactElement): import("react").CElement<{
        value: any;
    }, import("react").Component<{
        value: any;
    }, any, any>>;
    toString(html: string): any;
}>;
declare function clientProvider(context: Context): {
    provide(app: ReactElement): import("react").CElement<{
        value: any;
    }, import("react").Component<{
        value: any;
    }, any, any>>;
};
declare const _default: typeof ssrCollector | typeof clientProvider;
export default _default;
