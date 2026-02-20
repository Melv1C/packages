import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../base/button';

export function NextButton(props: Omit<ComponentProps<typeof Button>, 'children'>) {
  const { t } = useTranslation('ui');
  return (
    <Button {...props}>
      <ArrowRightIcon className="h-4 w-4" />
      {t('next')}
    </Button>
  );
}

export function PreviousButton(props: Omit<ComponentProps<typeof Button>, 'children'>) {
  const { t } = useTranslation('ui');
  return (
    <Button {...props}>
      <ArrowLeftIcon className="h-4 w-4" />
      {t('previous')}
    </Button>
  );
}
