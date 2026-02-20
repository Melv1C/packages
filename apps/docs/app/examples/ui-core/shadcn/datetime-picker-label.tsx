'use client';

import { DateTimePicker } from '@melv1c/ui-core';
import { useState } from 'react';

export default function DateTimePickerLabel() {
  const [value, setValue] = useState<Date | undefined>();

  return (
    <div className="w-80">
      <DateTimePicker
        label="Appointment Date & Time"
        placeholder="Pick a date and time"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
