import html2canvas from 'html2canvas';

export async function generateMemeCanvas(containerRef) {
  if (!containerRef.current) {
    throw new Error('Container reference is not available');
  }

  return html2canvas(containerRef.current, {
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
    scale: 2,
  });
}

export async function canvasToBlob(canvas) {
  return new Promise((resolve) => {
    canvas.toBlob(resolve, 'image/png', 1.0);
  });
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
