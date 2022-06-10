export function deserializeState(state) {
    try {
        return JSON.parse(state || '{}');
    }
    catch (error) {
        console.error('[SSR] On state deserialization -', error, state);
        return {};
    }
}
