// @ts-ignore
import { ServerStyleSheets } from '@material-ui/core/styles';
const key = 'jss-server-side';
function ssrCollector(context) {
    const sheet = new ServerStyleSheets();
    return {
        collect(app) {
            //@ts-ignore
            return sheet.collect(app);
        },
        toString() {
            let css = sheet.toString();
            // @ts-ignore
            if (import.meta.env.PROD) {
                css = css.replace(/\s{2,}/gm, ' ');
            }
            return `<style id="${key}">${css}</style>`;
        },
    };
}
function clientProvider(context) {
    return {
        cleanup() {
            setTimeout(() => {
                const el = document.querySelector(`#${key}`);
                el && el.parentElement && el.parentElement.removeChild(el);
            });
        },
    };
}
// @ts-ignore
export default import.meta.env.SSR ? ssrCollector : clientProvider;
