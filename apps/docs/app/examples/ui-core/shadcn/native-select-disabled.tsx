import { NativeSelect, NativeSelectOption } from '@melv1c/ui-core';

export default function NativeSelectDisabled() {
  return (
    <NativeSelect disabled>
      <NativeSelectOption value="">Disabled</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
    </NativeSelect>
  );
}
