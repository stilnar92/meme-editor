import { PageHeader } from '@/widgets/PageHeader';

export const EditorHeader = () => {
  const backButton = (
    <a 
      href='/'
      className="text-gray-600 hover:text-gray-800"
    >
      Back to Gallery
    </a>
  );

  return (
    <PageHeader 
      title="Edit Meme" 
      rightContent={backButton}
    />
  );
};
