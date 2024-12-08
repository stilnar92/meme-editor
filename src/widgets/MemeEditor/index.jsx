import { useRef, useEffect, useCallback } from 'react';
import { useMemeStore } from '@/entities/meme/model/useMemeStore';
import { MemeEditorCanvas } from '@/features/memeEditor/ui/MemeEditorCanvas';
import { DraggableText } from '@/features/memeEditor/ui/text';
import { EditorLayout } from './ui/EditorLayout';
import { EditorControls } from './ui/EditorControls';

const Canvas = ({ state, renderMemeText, imageContainerRef }) => {
  return (
    <div className="relative w-full overflow-auto" role="region" aria-label="Meme canvas">
      <MemeEditorCanvas
        imageUrl={state.imageUrl}
        textElements={state.textElements}
        onRenderMemeText={renderMemeText}
        containerRef={imageContainerRef}
      />
    </div>
  );
};

const Controls = ({ state, handleAddText, updateText, removeText, imageContainerRef }) => {
  return (
    <div className="w-full">
      <EditorControls
        textElements={state.textElements}
        onAddText={handleAddText}
        onUpdateText={updateText}
        onRemoveText={removeText}
        containerRef={imageContainerRef}
      />
    </div>
  );
};

// Main component
export function MemeEditor({ imageUrl }) {
  const imageContainerRef = useRef(null);
  const { 
    state, 
    createMeme,
    addText, 
    updateText, 
    removeText, 
    moveText 
  } = useMemeStore();

  useEffect(() => {
    if (imageUrl) {
      createMeme(imageUrl);
    }
  }, [imageUrl, createMeme]);

  const handleAddText = useCallback(() => {
    addText('New Text', { x: 50, y: 50 });
  }, [addText]);

  if (!state) {
    return (
      <div role="alert" aria-busy="true" className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  const getElementStyles = (element) => {
    const { id, position, ...styles } = element;
    return styles;
  };


  return (
    <EditorLayout
      canvas={
        <Canvas
          state={state}
          renderMemeText={(element) => (
            <DraggableText
              key={element.id}
              styles={getElementStyles(element)}
              position={element.position}
              onDragStop={(x, y) => moveText(element.id, x, y)}
            />
          )}
          imageContainerRef={imageContainerRef}
        />
      }
      controls={
        <Controls
          state={state}
          handleAddText={handleAddText}
          updateText={updateText}
          removeText={removeText}
          imageContainerRef={imageContainerRef}
        />
      }
    />
  );
}
