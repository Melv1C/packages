import { Field, FieldDescription, FieldLabel, Input } from '@melv1c/ui-core';

export default function InputFile() {
  return (
    <Field>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </Field>
  );
}
