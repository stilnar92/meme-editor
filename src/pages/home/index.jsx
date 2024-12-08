import { useNavigate } from 'react-router-dom';
import { MemeGrid } from '@/widgets/MemeGrid';
import { useMemeImages } from '@/features/memeGallery/model/useMemeImages';
import { Template } from '@/widgets/Template';
import { PageHeader } from '@/widgets/PageHeader';
import { Loading } from '@/shared/ui/Loading';
import { Error } from '@/shared/ui/Error';
import { ROUTES } from '@/shared/config/routes';

export function HomePage() {
  const navigate = useNavigate();
  const { memeImages, isLoading, error } = useMemeImages();

  const handleMemeSelect = (meme) => {
    const templateId = meme.template.split('/').pop();
    navigate(ROUTES.editor({ params: { template: templateId } }));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const header = (
    <PageHeader title="Meme Editor" />
  );

  return (
    <Template header={header}>
      <MemeGrid
        images={memeImages}
        loading={isLoading}
        error={error}
        onMemeSelect={handleMemeSelect}
      />
    </Template>
  );
}
