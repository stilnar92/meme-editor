import { Box } from '@/shared/ui/Box';

export function Loading({ text = 'Loading...' }) {
  return (
    <Box className="flex justify-center items-center min-h-[50vh]">
      <Box className="text-xl text-gray-400">{text}</Box>
    </Box>
  );
}
