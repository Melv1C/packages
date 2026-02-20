import { Alert, AlertDescription, AlertTitle } from '@melv1c/ui-core';
import { CheckCircle2Icon } from 'lucide-react';

export default function AlertBasic() {
  return (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected immediately.
      </AlertDescription>
    </Alert>
  );
}
