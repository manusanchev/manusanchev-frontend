import { IContactSectionItem } from "@src/types";
import LinkedinIcon from "@components/icons/LinkedinIcon.vue";
import TwitterIcon from "@components/icons/TwitterIcon.vue";
import EmailIcon from "@components/icons/EmailIcon.vue";

export const contactData: IContactSectionItem[] = [
  {
    url: "https://www.linkedin.com/in/manusanchev",
    hintTime: "Suelo responder en <span class='contact-hint'>1 hora</span>",
    icon: LinkedinIcon,
  },
  {
    url: "https://twitter.com/messages/compose?recipient_id=2317765355&text=Hola Manuel, me gustaria poder hablar contigo",
    additionalData: "@manuelsv_98",
    hintTime: "Suelo responder en <span class='contact-hint'>2 horas</span>",
    icon: TwitterIcon,
  },
  {
    url: "mailto:manuvempleo@gmail.com",
    hintTime: "Suelo responder en <span class='contact-hint'>4 horas</span>",
    icon: EmailIcon,
  },
];
