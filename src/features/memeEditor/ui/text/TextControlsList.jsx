import { TextControls } from './TextControls';

export function TextControlsList({ elements, onUpdate, onRemove }) {
  const getElementStyles = (element) => {
    const { id, position, ...styles } = element;
    return styles;
  };

  return (
    <div className="space-y-6">
      {elements.map((element) => (
        <TextControls
          key={element.id}
          styles={getElementStyles(element)}
          showRemoveButton={elements.length > 1}
          onUpdate={(updates) => onUpdate(element.id, updates)}
          onRemove={() => onRemove(element.id)}
        />
      ))}
    </div>
  );
}
