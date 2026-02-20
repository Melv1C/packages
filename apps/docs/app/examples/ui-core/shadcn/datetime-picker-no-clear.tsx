'use client';

import { DateTimePicker } from '@melv1c/ui-core';
import { useState } from 'react';

export default function DateTimePickerNoClear() {
  const [value, setValue] = useState<Date | undefined>(new Date());

  return (
    <div className="w-80">
      <DateTimePicker
        label="Without Clear Button"
        value={value}
        onChange={setValue}
        showClear={false}
      />
    </div>
  );
}
