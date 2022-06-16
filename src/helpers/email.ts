import { init } from '@emailjs/browser';

export const userId = process.env.REACT_APP_EMAILJS_USER_ID as string;
export const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
export const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;

export const initEmail = () => init(userId);
