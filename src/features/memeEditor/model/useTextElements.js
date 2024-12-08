import { useCallback } from 'react';
import { useMemeEditor } from './context';

export function useTextElements() {
  const { textElements, updateTextElement, removeTextElement } = useMemeEditor();

  const handleDragStop = useCallback((id, x, y) => {
    updateTextElement(id, { position: { x, y } });
  }, [updateTextElement]);

  const handleTextUpdate = useCallback((id, updates) => {
    updateTextElement(id, updates);
  }, [updateTextElement]);

  const renderMemeText = useCallback((element) => (
    <DraggableText
      key={element.id}
      text={element.text}
      font={element.font}
      size={element.size}
      color={element.color}
      position={element.position}
      onDragStop={(x, y) => handleDragStop(element.id, x, y)}
    />
  ), [handleDragStop]);

  return {
    textElements,
    handleDragStop,
    handleTextUpdate,
    removeTextElement,
    renderMemeText
  };
}
