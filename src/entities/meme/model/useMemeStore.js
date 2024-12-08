import { useState, useEffect, useCallback } from 'react';
import { createMemeStore } from './store';

// Singleton store instance
const store = createMemeStore();

export function useMemeStore() {
  const [state, setState] = useState(store.getState());
  
  useEffect(() => {
    const unsubscribe = store.subscribe(setState);
    return unsubscribe;
  }, []); 

  const createMeme = useCallback((imageUrl) => {
    store.createMeme(imageUrl);
  }, []);

  const addText = useCallback((text, position) => {
    return store.addText(text, position);
  }, []);

  const updateText = useCallback((id, updates) => {
    return store.updateText(id, updates);
  }, []);

  const removeText = useCallback((id) => {
    return store.removeText(id);
  }, []);

  const moveText = useCallback((id, x, y) => {
    return store.moveText(id, x, y);
  }, []);

  return {
    state,
    createMeme,
    addText,
    updateText,
    removeText,
    moveText,
  };
}

export const memeStore = store;
