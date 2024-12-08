// Define color options that can be reused
const colorOptions = [
  { value: '#FFFFFF', label: 'White' },
  { value: '#000000', label: 'Black' },
  { value: '#FF0000', label: 'Red' },
  { value: '#00FF00', label: 'Green' },
  { value: '#0000FF', label: 'Blue' },
  { value: '#FFFF00', label: 'Yellow' }
];

// Define all text style properties and their controls in one place
export const textStyleConfig = {
  text: {
    type: 'text',
    label: 'Text',
    defaultValue: 'New Text'
  },
  font: {
    type: 'select',
    label: 'Font',
    defaultValue: 'Impact',
    options: [
      { value: 'Impact', label: 'Impact' },
      { value: 'Arial', label: 'Arial' },
      { value: 'Comic Sans MS', label: 'Comic Sans' },
      { value: 'Helvetica', label: 'Helvetica' },
      { value: 'Times New Roman', label: 'Times New Roman' }
    ]
  },
  size: {
    type: 'select',
    label: 'Size',
    defaultValue: 32,
    options: [
      { value: 24, label: 'Small' },
      { value: 32, label: 'Medium' },
      { value: 48, label: 'Large' },
      { value: 64, label: 'Extra Large' }
    ]
  },
  color: {
    type: 'select',
    label: 'Color',
    defaultValue: '#FFFFFF',
    options: colorOptions
  },
  backgroundColor: {
    type: 'color',
    label: 'Background',
    defaultValue: 'transparent',
    options: colorOptions
  },
  outlineWidth: {
    type: 'number',
    label: 'Outline Width',
    defaultValue: 0,
    min: 0,
    max: 10
  },
  outlineColor: {
    type: 'select',
    label: 'Outline Color',
    defaultValue: '#000000',
    options: colorOptions
  },
  rotate: {
    type: 'number',
    label: 'Rotate (deg)',
    defaultValue: 0,
    min: -180,
    max: 180
  },
  scale: {
    type: 'number',
    label: 'Scale',
    defaultValue: 1,
    min: 0.1,
    max: 5,
    step: 0.1
  },
  textAlign: {
    type: 'select',
    label: 'Text Align',
    defaultValue: 'center',
    options: [
      { value: 'left', label: 'Left' },
      { value: 'center', label: 'Center' },
      { value: 'right', label: 'Right' }
    ]
  },
  textTransform: {
    type: 'select',
    label: 'Text Transform',
    defaultValue: 'none',
    options: [
      { value: 'none', label: 'Normal' },
      { value: 'uppercase', label: 'Uppercase' },
      { value: 'lowercase', label: 'Lowercase' },
      { value: 'capitalize', label: 'Capitalize' }
    ]
  },
  opacity: {
    type: 'range',
    label: 'Opacity',
    defaultValue: 1,
    min: 0,
    max: 1,
    step: 0.1
  },
  letterSpacing: {
    type: 'number',
    label: 'Letter Spacing',
    defaultValue: 0,
    min: -5,
    max: 20,
    step: 0.5
  },
  lineHeight: {
    type: 'number',
    label: 'Line Height',
    defaultValue: 1.2,
    min: 0.5,
    max: 3,
    step: 0.1
  },
  fontWeight: {
    type: 'select',
    label: 'Font Weight',
    defaultValue: 'bold',
    options: [
      { value: 'normal', label: 'Normal' },
      { value: 'bold', label: 'Bold' },
      { value: '100', label: 'Thin' },
      { value: '300', label: 'Light' },
      { value: '500', label: 'Medium' },
      { value: '700', label: 'Bold' },
      { value: '900', label: 'Black' }
    ]
  },
  textShadow: {
    type: 'select',
    label: 'Text Shadow',
    defaultValue: 'none',
    options: [
      { value: 'none', label: 'None' },
      { value: '2px 2px 2px rgba(0,0,0,0.5)', label: 'Soft' },
      { value: '4px 4px 0px rgba(0,0,0,1)', label: 'Hard' },
      { value: '0 0 10px rgba(255,255,255,0.8)', label: 'Glow' }
    ]
  },
  fontStyle: {
    type: 'select',
    label: 'Font Style',
    defaultValue: 'normal',
    options: [
      { value: 'normal', label: 'Normal' },
      { value: 'italic', label: 'Italic' },
      { value: 'oblique', label: 'Oblique' }
    ]
  }
};

// Get default values for all properties
export const getDefaultStyles = () => {
  const defaults = {};
  Object.entries(textStyleConfig).forEach(([key, config]) => {
    defaults[key] = config.defaultValue;
  });
  return defaults;
};
