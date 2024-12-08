import { Box } from '@/shared/ui/Box';

export function EditorLayout({ canvas, controls }) {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div className="flex gap-6">
        <Box variant="outlined" shadow="lg" padding="lg" className="flex-[2] min-w-0">
          {canvas}
        </Box>

        <Box variant="outlined" shadow="lg" padding="lg" className="flex-1 min-w-[320px]">
          {controls}
        </Box>
      </div>
    </div>
  );
}
