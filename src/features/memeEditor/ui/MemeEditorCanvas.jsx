import { MemeImage } from '@/entities/meme/ui/MemeImage';

export function MemeEditorCanvas({ 
  imageUrl, 
  textElements, 
  onRenderMemeText,
  containerRef 
}) {
  return (
    <div ref={containerRef} className="relative">
      <MemeImage src={imageUrl} />
      <div className="absolute inset-0">
        {textElements.map(onRenderMemeText)}
      </div>
    </div>
  );
}
