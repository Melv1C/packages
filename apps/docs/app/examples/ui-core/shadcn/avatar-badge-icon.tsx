import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '@melv1c/ui-core';
import { PlusIcon } from 'lucide-react';

export default function AvatarBadgeIconExample() {
  return (
    <Avatar className="grayscale">
      <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
      <AvatarFallback>PP</AvatarFallback>
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  );
}
