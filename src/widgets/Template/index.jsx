import { Box } from '@/shared/ui/Box';

export function Template({ header, children }) {
  return (
    <Box className="bg-black min-h-screen flex flex-col">
      {header}
      <Box as="main" className="bg-black flex-1 container mx-auto px-4 py-8">
        {children}
      </Box>
    </Box>
  );
}
