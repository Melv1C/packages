import { Badge } from '@melv1c/ui-core';
import { ArrowUpRightIcon } from 'lucide-react';

export default function BadgeAsLink() {
  return (
    <Badge asChild>
      <a href="#link">
        Open Link <ArrowUpRightIcon data-icon="inline-end" />
      </a>
    </Badge>
  );
}
