import { Box } from '@/shared/ui/Box';

export function List({ items, renderItem, className }) {
  return (
    <Box className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {items.map((item, index) => renderItem(item, index))}
    </Box>
  );
}
