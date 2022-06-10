// @ts-ignore
import { ServerStyleSheet } from 'styled-components';
function ssrCollector(context) {
    const sheet = new ServerStyleSheet();
    return {
        collect(app) {
            // @ts-ignore
            return sheet.collectStyles(app);
        },
        toString() {
            return sheet.getStyleTags();
        },
        cleanup() {
            sheet.seal();
        },
    };
}
// @ts-ignore
export default import.meta.env.SSR ? ssrCollector : null;
