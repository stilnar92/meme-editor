import { Button } from '@/shared/ui/Button';

export function AddTextButton({ onClick }) {
  return (
    <Button type="button" fullWidth onClick={onClick}>
      Add Text
    </Button>
  );
}
