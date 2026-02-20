import { Button } from '@melv1c/ui-core';
import { GitBranchIcon } from 'lucide-react';

export default function ButtonWithIcon() {
  return (
    <Button variant="outline" size="sm">
      <GitBranchIcon /> New Branch
    </Button>
  );
}
