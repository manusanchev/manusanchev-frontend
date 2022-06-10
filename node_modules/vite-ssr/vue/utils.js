export function addPagePropsGetterToRoutes(routes) {
    routes.forEach((staticRoute) => {
        const originalProps = staticRoute.props;
        staticRoute.props = (route) => {
            const resolvedProps = originalProps === true
                ? route.params
                : typeof originalProps === 'function'
                    ? originalProps(route)
                    : originalProps;
            return {
                ...(route.meta.hmr || {}).value,
                ...(route.meta.state || {}),
                ...(resolvedProps || {}),
            };
        };
    });
}
