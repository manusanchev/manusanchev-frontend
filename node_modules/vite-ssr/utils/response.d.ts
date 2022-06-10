import type { WriteResponse } from './types';
export declare function useSsrResponse(): {
    deferred: {
        promise: Promise<WriteResponse>;
        status: "pending" | "resolved" | "rejected";
        resolve: (value: WriteResponse) => void;
        reject: (reason?: any) => void;
    };
    response: WriteResponse;
    writeResponse: (params: WriteResponse) => void;
    isRedirect: () => boolean;
    redirect: (location: string, status?: number) => void;
};
export declare function useClientRedirect(spaRedirect?: (location: string) => void): {
    writeResponse: () => void;
    redirect: (location: string, status?: number | undefined) => void;
};
