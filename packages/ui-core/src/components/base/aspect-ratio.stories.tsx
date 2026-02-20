import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  parameters: {
    docs: {
      description: {
        component: `
Displays content within a desired ratio.

For more information, see the <a href="https://ui.shadcn.com/docs/components/aspect-ratio" target="_blank" style="text-decoration: underline;">Shadcn Aspect Ratio documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The aspect ratio (width / height)',
    },
  },
  args: {
    ratio: 16 / 9,
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: args => (
    <div className="w-[320px]">
      <AspectRatio {...args}>
        <div className="bg-muted/50 flex h-full w-full items-center justify-center rounded-md border">
          <span className="text-muted-foreground text-sm">{args.ratio} content</span>
        </div>
      </AspectRatio>
    </div>
  ),
};
