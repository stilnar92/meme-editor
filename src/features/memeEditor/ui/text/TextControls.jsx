import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { StyleControl } from './StyleControl';
import { textStyleConfig } from '../../lib/styleConfig';

export function TextControls({ styles = {}, onUpdate, onRemove, showRemoveButton }) {
  const handleChange = (property, value) => {
    onUpdate({ [property]: value });
  };

  const getValue = (property) => {
    return styles[property] ?? textStyleConfig[property].defaultValue;
  };

  const { text, ...otherControls } = textStyleConfig;

  return (
    <div className="space-y-6">
      <div className="w-full">
        <StyleControl
          key="text"
          type={text.type}
          label={text.label}
          value={getValue('text')}
          onChange={(value) => handleChange('text', value)}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(otherControls).map(([property, config]) => (
          <StyleControl
            key={property}
            type={config.type}
            label={config.label}
            value={getValue(property)}
            options={config.options}
            min={config.min}
            max={config.max}
            step={config.step}
            onChange={(value) => handleChange(property, value)}
          />
        ))}
      </div>

      {showRemoveButton && (
        <Button
          variant="danger"
          onClick={onRemove}
          className="w-full"
        >
          <Icon name="trash" className="w-4 h-4 mr-2" />
          Remove Text
        </Button>
      )}
    </div>
  );
}
