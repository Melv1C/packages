import { Field, FieldLabel, Switch } from '@melv1c/ui-core';

export default function SwitchDisabled() {
  return (
    <Field orientation="horizontal" data-disabled className="w-fit">
      <Switch id="switch-disabled-unchecked" disabled />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  );
}
