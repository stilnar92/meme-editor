import { Box } from '@/shared/ui/Box';

export function Error({ message }) {
  return (
    <Box className="flex justify-center items-center min-h-[50vh]">
      <Box className="text-xl text-red-500">
        Error: {message}
      </Box>
    </Box>
  );
}
