import { Input } from '@/shared/ui/Form/Input';
import { Select } from '@/shared/ui/Form/Select';

export function StyleControl({ type, label, value, options, onChange, min, max, step }) {
  switch (type) {
    case 'text':
      return (
        <Input
          label={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );

    case 'number':
      return (
        <Input
          type="number"
          label={label}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      );

    case 'range':
      return (
        <Input
          type="range"
          label={label}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      );

    case 'select':
      return (
        <Select
          label={label}
          value={value}
          options={options}
          onChange={(e) => onChange(e.target.value)}
        />
      );

    case 'color':
      return (
        <Select
          label={label}
          value={value}
          options={[{ value: 'transparent', label: 'None' }, ...options]}
          onChange={(e) => onChange(e.target.value)}
        />
      );

    default:
      return null;
  }
}
