import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Button } from './button';
import { Toaster } from './sonner';

const meta: Meta<typeof Toaster> = {
  component: Toaster,
  parameters: {
    docs: {
      description: {
        component: `
An opinionated toast component for React.

For more information, see the <a href="https://ui.shadcn.com/docs/components/sonner" target="_blank" style="text-decoration: underline;">Shadcn Sonner documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    position: 'top-right',
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: props => (
    <div className="flex h-96 w-[800px] flex-col items-center justify-center">
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>
      <Toaster {...props} />
    </div>
  ),
};

export const Types: Story = {
  render: _ => (
    <div className="flex h-96 w-[800px] flex-col items-center justify-center">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast('Event has been created')}>
          Default
        </Button>
        <Button variant="outline" onClick={() => toast.success('Event has been created')}>
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.info('Be at the area 10 minutes before the event time')}
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning('Event start time cannot be earlier than 8am')}
        >
          Warning
        </Button>
        <Button variant="outline" onClick={() => toast.error('Event has not been created')}>
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast.promise<{ name: string }>(
              () => new Promise(resolve => setTimeout(() => resolve({ name: 'Event' }), 2000)),
              {
                loading: 'Loading...',
                success: data => `${data.name} has been created`,
                error: 'Error',
              },
            );
          }}
        >
          Promise
        </Button>
      </div>
      <Toaster />
    </div>
  ),
};

export const Position: Story = {
  render: _ => (
    <div className="flex h-96 w-[800px] flex-col items-center justify-center">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toast.success('Event has been created', { position: 'top-right' })}
        >
          Top Right
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success('Event has been created', { position: 'top-left' })}
        >
          Top Left
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success('Event has been created', {
              position: 'bottom-right',
            })
          }
        >
          Bottom Right
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success('Event has been created', { position: 'bottom-left' })}
        >
          Bottom Left
        </Button>
      </div>
      <Toaster />
    </div>
  ),
};
