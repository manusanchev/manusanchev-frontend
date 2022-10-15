import LinkedinIcon from "@components/icons/LinkedinIcon.vue";
import TwitterIcon from "@components/icons/TwitterIcon.vue";
import EmailIcon from "@components/icons/EmailIcon.vue";

export enum ContactType {
  LINKEDIN = 1,
  TWITTER = 2,
  EMAIL = 3,
}

export interface ContactSectionItem {
  contactType: ContactType;
  url: string;
  additionalData?: string | undefined;
  hintTime: string;
}

export const contactIconMap: Map<ContactType, any> = new Map<ContactType, any>([
  [ContactType.LINKEDIN, LinkedinIcon],
  [ContactType.TWITTER, TwitterIcon],
  [ContactType.EMAIL, EmailIcon],
]);
