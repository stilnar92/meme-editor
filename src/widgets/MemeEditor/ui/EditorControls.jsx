import { memo } from 'react';
import PropTypes from 'prop-types';
import { TextControlsList } from '@/features/memeEditor/ui/text';
import { AddTextButton } from '@/features/memeEditor/ui/AddTextButton';
import { DownloadButton } from '@/features/memeDownload/ui/DownloadButton';

const TextControls = memo(({ elements, onUpdate, onRemove }) => (
  <TextControlsList
    elements={elements}
    onUpdate={onUpdate}
    onRemove={onRemove}
  />
));

TextControls.displayName = 'TextControls';

const ActionButtons = memo(({ onAddText, containerRef }) => (
  <div className="grid gap-4">
    <AddTextButton onClick={onAddText} />
    <DownloadButton containerRef={containerRef} />
  </div>
));

ActionButtons.displayName = 'ActionButtons';

export const EditorControls = memo(({ 
  textElements, 
  onUpdateText, 
  onRemoveText, 
  onAddText,
  containerRef 
}) => {
  return (
    <div className="space-y-6">
      <TextControls
        elements={textElements}
        onUpdate={onUpdateText}
        onRemove={onRemoveText}
      />
      <ActionButtons
        onAddText={onAddText}
        containerRef={containerRef}
      />
    </div>
  );
});

EditorControls.displayName = 'EditorControls';

EditorControls.propTypes = {
  textElements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
  onUpdateText: PropTypes.func.isRequired,
  onRemoveText: PropTypes.func.isRequired,
  onAddText: PropTypes.func.isRequired,
  containerRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired,
};

// Define prop types for sub-components
TextControls.propTypes = {
  elements: EditorControls.propTypes.textElements,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

ActionButtons.propTypes = {
  onAddText: PropTypes.func.isRequired,
  containerRef: EditorControls.propTypes.containerRef,
};
