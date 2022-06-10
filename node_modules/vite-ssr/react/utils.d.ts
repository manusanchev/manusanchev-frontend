import React from 'react';
import type { RouteRaw, PropsProvider as PropsProviderType } from './types';
import type { Base, Meta, State, PagePropsOptions } from '../utils/types';
declare type RouterOptions = {
    base?: Base;
    routes: RouteRaw[];
    initialState?: State;
    PropsProvider?: PropsProviderType;
    pagePropsOptions?: PagePropsOptions;
};
export declare function createRouter({ base, routes, initialState, PropsProvider, pagePropsOptions, }: RouterOptions): {
    getCurrentRoute: () => RouteRaw | undefined;
    isFirstRoute: () => boolean;
    routes: {
        meta: Meta;
        component: (props: Record<string, any>) => React.FunctionComponentElement<{
            [key: string]: any;
            from?: RouteRaw | undefined;
            to: RouteRaw;
        }> | React.CElement<{
            [x: string]: any;
        }, React.Component<{
            [x: string]: any;
        }, any, any>>;
        name?: string | undefined;
        path: string;
        routes?: RouteRaw[] | undefined;
    }[];
};
export declare type Router = ReturnType<typeof createRouter>;
export {};
