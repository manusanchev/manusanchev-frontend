export declare function defer<T = unknown>(): {
    promise: Promise<T>;
    status: 'pending' | 'resolved' | 'rejected';
    resolve: (value: T) => void;
    reject: (reason?: any) => void;
};
