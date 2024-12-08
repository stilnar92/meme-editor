import Draggable from 'react-draggable';
import clsx from 'clsx';

export function DraggableText({ styles = {}, position, onDragStop }) {
  // Extract style properties with defaults
  const {
    text = '',
    font = 'Impact',
    size = 32,
    color = '#FFFFFF',
    backgroundColor = 'transparent',
    outlineWidth = 0,
    outlineColor = '#000000',
    rotate = 0,
    scale = 1,
    textAlign = 'center',
    textTransform = 'none',
    opacity = 1,
    letterSpacing = 0,
    lineHeight = 1.2,
    fontWeight = 'bold',
    textShadow = 'none',
    fontStyle = 'normal'
  } = styles;

  // Create CSS styles with proper transformations and outline
  const cssStyles = {
    color,
    backgroundColor,
    fontFamily: font,
    fontSize: `${size}px`,
    textAlign,
    textTransform,
    opacity,
    letterSpacing: `${letterSpacing}px`,
    lineHeight,
    fontWeight,
    fontStyle,
    // Combine text shadow with outline if needed
    textShadow: outlineWidth > 0
      ? `${outlineWidth}px ${outlineWidth}px 0 ${outlineColor},
         ${-outlineWidth}px ${outlineWidth}px 0 ${outlineColor},
         ${outlineWidth}px ${-outlineWidth}px 0 ${outlineColor},
         ${-outlineWidth}px ${-outlineWidth}px 0 ${outlineColor}`
      : textShadow,
    // Apply transforms
    transform: `translate(-50%) rotate(${rotate}deg) scale(${scale})`
  };

  return (
    <Draggable
      defaultPosition={position}
      onStop={(e, data) => onDragStop(data.x, data.y)}
      bounds="parent"
    >
      <div
        className={clsx(
          'absolute cursor-move select-none',
          'w-[200px]',
          'break-words whitespace-pre-wrap'
        )}
        style={cssStyles}
      >
        {text}
      </div>
    </Draggable>
  );
}
