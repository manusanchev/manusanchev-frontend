export enum ContactIcon {
  LINKEDIN = 1,
  TWITTER = 2,
  EMAIL = 3,
}

export interface ContactSectionItem {
  contactType: ContactIcon;
  url: string;
  additionalData?: string | undefined;
  hintTime: string;
}
