import type { Meta, StoryObj } from '@storybook/react-vite';
import type * as React from 'react';
import { Button } from './button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

type ExtendDialogContentProps = React.ComponentProps<typeof DialogContent> & {
  showCloseButton?: boolean;
};

const meta: Meta<ExtendDialogContentProps> = {
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: `
A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

For more information, see the <a href="https://ui.shadcn.com/docs/components/dialog" target="_blank" style="text-decoration: underline;">Shadcn Dialog documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showCloseButton: {
      control: 'boolean',
      description: 'Whether the dialog has a close button',
    },
  },
  args: {
    showCloseButton: true,
  },
};

export default meta;
type Story = StoryObj<ExtendDialogContentProps>;

export const Default: Story = {
  render: args => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={args.showCloseButton}>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>
            Use dialogs to capture user attention for short tasks or confirmations.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
