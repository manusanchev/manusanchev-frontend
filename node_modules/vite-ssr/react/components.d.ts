import { FunctionComponent, ReactElement } from 'react';
import type { Context } from './types';
export declare const ClientOnly: FunctionComponent;
export declare function provideContext(app: ReactElement, context: Context): import("react").FunctionComponentElement<import("react").ProviderProps<any>>;
export declare function useContext(): Context;
