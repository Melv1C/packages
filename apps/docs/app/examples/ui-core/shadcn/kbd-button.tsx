import { Button, Kbd } from '@melv1c/ui-core';

export default function KbdButton() {
  return (
    <Button variant="outline">
      Accept{' '}
      <Kbd data-icon="inline-end" className="translate-x-0.5">
        ⏎
      </Kbd>
    </Button>
  );
}
