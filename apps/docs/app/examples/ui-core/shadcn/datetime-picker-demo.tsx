'use client';

import { DateTimePicker } from '@melv1c/ui-core';
import { useState } from 'react';

export default function DateTimePickerDemo() {
  const [value, setValue] = useState<Date | undefined>(new Date());

  return (
    <div className="w-80">
      <DateTimePicker label="Date & Time" value={value} onChange={setValue} />
      <p className="text-muted-foreground mt-3 text-sm">
        Selected: {value ? value.toLocaleString() : 'None'}
      </p>
    </div>
  );
}
