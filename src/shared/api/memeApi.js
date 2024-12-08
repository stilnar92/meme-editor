export const BASE_URL = 'https://api.memegen.link';

const transformImageUrl = (template) => {
  const templateId = template.split('/').pop();
  return `${BASE_URL}/images/${templateId}.jpg`;
};

export const memeApi = {
  async getImages() {
    try {
      const response = await fetch(`${BASE_URL}/images`);
      if (!response.ok) throw new Error('Failed to fetch memes');
      const data = await response.json();
      return data.map(meme => ({
        ...meme,
        url: transformImageUrl(meme.template)
      }));
    } catch (error) {
      console.error('Error fetching memes:', error);
      throw error;
    }
  }
};