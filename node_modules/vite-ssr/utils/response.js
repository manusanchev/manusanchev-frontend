import { defer } from './defer';
const isRedirect = ({ status = 0 }) => status >= 300 && status < 400;
export function useSsrResponse() {
    const deferred = defer();
    let response = {};
    const writeResponse = (params) => {
        Object.assign(response, params);
        if (isRedirect(params)) {
            // Stop waiting for rendering when redirecting
            deferred.resolve(response);
        }
    };
    return {
        deferred,
        response,
        writeResponse,
        isRedirect: () => isRedirect(response),
        redirect: (location, status = 302) => writeResponse({ headers: { location }, status }),
    };
}
const externalRedirect = (location) => {
    window.location.href = location;
};
export function useClientRedirect(spaRedirect = externalRedirect) {
    return {
        writeResponse: () => console.warn('[SSR] Do not call writeResponse in browser'),
        redirect: (location, status) => {
            return location.startsWith('/')
                ? spaRedirect(location)
                : externalRedirect(location);
        },
    };
}
