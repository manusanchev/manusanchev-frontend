export declare function findDependencies(modules: string[], manifest: Record<string, string[]>): string[];
export declare function renderPreloadLinks(files: string[]): string;
declare type DocParts = {
    htmlAttrs?: string;
    bodyAttrs?: string;
    headTags?: string;
    body?: string;
    initialState?: string;
};
export declare function buildHtmlDocument(template: string, { htmlAttrs, bodyAttrs, headTags, body, initialState }: DocParts): string;
export {};
