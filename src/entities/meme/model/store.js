import { createMeme, addText, updateText, removeText, moveText } from './meme';

export const createMemeStore = () => {
  let currentMeme = null;
  const listeners = new Set();

  const getState = () => currentMeme;

  const setState = (newMeme) => {
    currentMeme = newMeme;
    notifyListeners();
  };

  const notifyListeners = () => {
    listeners.forEach(listener => listener(currentMeme));
  };

  return {
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },

    getState,

    createMeme: (imageUrl) => {
      setState(createMeme(imageUrl));
    },

    addText: (text, position) => {
      if (!currentMeme) return null;
      const newMeme = addText(currentMeme, text, position);
      setState(newMeme);
      return newMeme.textElements[newMeme.textElements.length - 1].id;
    },

    updateText: (id, updates) => {
      if (!currentMeme) return false;
      const newMeme = updateText(currentMeme, id, updates);
      setState(newMeme);
      return true;
    },

    removeText: (id) => {
      if (!currentMeme) return false;
      const newMeme = removeText(currentMeme, id);
      setState(newMeme);
      return true;
    },

    moveText: (id, x, y) => {
      if (!currentMeme) return false;
      const newMeme = moveText(currentMeme, id, x, y);
      setState(newMeme);
      return true;
    }
  };
};
