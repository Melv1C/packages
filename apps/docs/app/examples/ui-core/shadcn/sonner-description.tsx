import { Button } from '@melv1c/ui-core';
import { toast } from 'sonner';

export default function SonnerDescription() {
  return (
    <Button
      onClick={() =>
        toast('Event has been created', {
          description: 'Monday, January 3rd at 6:00pm',
        })
      }
      variant="outline"
      className="w-fit"
    >
      Show Toast
    </Button>
  );
}
