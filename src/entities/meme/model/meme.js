import { getDefaultStyles } from '../../../features/memeEditor/lib/styleConfig';

export const createMeme = (imageUrl, id = crypto.randomUUID()) => ({
  id,
  imageUrl,
  textElements: []
});

export const addText = (meme, text = 'New Text', position = { x: 50, y: 50 }) => {
  const textElement = {
    id: crypto.randomUUID(),
    position,
    ...getDefaultStyles(),
    text
  };
  
  return {
    ...meme,
    textElements: [...meme.textElements, textElement]
  };
};

export const updateText = (meme, id, updates) => {
  const index = meme.textElements.findIndex(el => el.id === id);
  if (index === -1) return meme;
  
  const updatedElements = [...meme.textElements];
  updatedElements[index] = {
    ...updatedElements[index],
    ...updates
  };
  
  return {
    ...meme,
    textElements: updatedElements
  };
};

export const removeText = (meme, id) => {
  return {
    ...meme,
    textElements: meme.textElements.filter(el => el.id !== id)
  };
};

export const moveText = (meme, id, x, y) => {
  return updateText(meme, id, { position: { x, y } });
};
