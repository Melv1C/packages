'use client';

import { DateTimePicker } from '@melv1c/ui-core';

export default function DateTimePickerDisabled() {
  return (
    <div className="w-80">
      <DateTimePicker label="Disabled Picker" value={new Date()} disabled />
    </div>
  );
}
