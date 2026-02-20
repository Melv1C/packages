/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: `
Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

For more information, see the <a href="https://ui.shadcn.com/docs/components/progress" target="_blank" style="text-decoration: underline;">Shadcn Progress documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: _ => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} className="w-[320px]" />;
  },
};
