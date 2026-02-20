'use client';

import { DateTimePicker } from '@melv1c/ui-core';
import { useState } from 'react';

export default function DateTimePickerFormat() {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="w-80">
      <DateTimePicker
        label="Custom Format"
        value={value}
        onChange={setValue}
        formatDateTime={formatDateTime}
      />
    </div>
  );
}
