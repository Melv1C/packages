import { Button } from '@melv1c/ui-core';

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <a href="#">Login</a>
    </Button>
  );
}
