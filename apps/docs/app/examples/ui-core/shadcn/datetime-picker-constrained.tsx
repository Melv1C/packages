'use client';

import { DateTimePicker } from '@melv1c/ui-core';
import { useState } from 'react';

export default function DateTimePickerConstrained() {
  const [value, setValue] = useState<Date | undefined>();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);

  return (
    <div className="w-80">
      <DateTimePicker
        label="Book an appointment"
        placeholder="Select a date (next 30 days)"
        value={value}
        onChange={setValue}
        disabledDates={[{ before: today }, { after: maxDate }]}
      />
      <p className="text-muted-foreground mt-3 text-sm">
        Only dates within the next 30 days are selectable.
      </p>
    </div>
  );
}
