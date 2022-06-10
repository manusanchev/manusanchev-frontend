"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntryPoint = exports.resolveViteConfig = exports.getPluginOptions = exports.INDEX_HTML = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const vite_1 = require("vite");
exports.INDEX_HTML = 'index.html';
function getPluginOptions(viteConfig) {
    var _a;
    return (((_a = viteConfig.plugins.find((plugin) => plugin.name === 'vite-ssr')) === null || _a === void 0 ? void 0 : _a.viteSsrOptions) || {});
}
exports.getPluginOptions = getPluginOptions;
async function resolveViteConfig(mode) {
    return (0, vite_1.resolveConfig)({}, 'build', mode || process.env.MODE || process.env.NODE_ENV);
}
exports.resolveViteConfig = resolveViteConfig;
async function getEntryPoint(config, indexHtml) {
    if (!config) {
        config = await resolveViteConfig();
    }
    if (!indexHtml) {
        indexHtml = await fs_1.default.promises.readFile(getPluginOptions(config).input || path_1.default.resolve(config.root, exports.INDEX_HTML), 'utf-8');
    }
    const matches = indexHtml
        .substr(indexHtml.lastIndexOf('script type="module"'))
        .match(/src="(.*)">/i);
    const entryFile = (matches === null || matches === void 0 ? void 0 : matches[1]) || 'src/main';
    return path_1.default.join(config.root, entryFile);
}
exports.getEntryPoint = getEntryPoint;
