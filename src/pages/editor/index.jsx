import { useSearchParams } from 'react-router-dom';
import { MemeEditor } from '@/widgets/MemeEditor';
import { Template } from '@/widgets/Template';
import { EditorHeader } from './ui/EditorHeader';
import { getTemplateUrl } from '@/features/memeEditor/lib/utils/template';

export function EditorPage() {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get('template');

  if (!templateId) {
    return null;
  }

  const imageUrl = getTemplateUrl(templateId);

  return (
    <Template header={<EditorHeader />}>
      <MemeEditor imageUrl={imageUrl} />
    </Template>
  );
}
