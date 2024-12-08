import { BASE_URL } from '@/shared/api/memeApi';

export const getTemplateUrl = (templateId) => {
  return `${BASE_URL}/images/${templateId}.jpg`;
};
