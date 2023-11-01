export enum ProviderName {
  Github = "github",
  Website = "website",
  Npm = "npm",
}

export interface ProviderBlockParams {
  name: ProviderName;
  url: string;
}
