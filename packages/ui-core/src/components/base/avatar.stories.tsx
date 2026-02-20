import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

type ExtendedAvatarProps = React.ComponentProps<typeof Avatar> & {
  source: string;
  fallback: string;
};

const meta: Meta<ExtendedAvatarProps> = {
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: `
An image element with a fallback for representing the user.

For more information, see the <a href="https://ui.shadcn.com/docs/components/avatar" target="_blank" style="text-decoration: underline;">Shadcn Avatar documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    source: {
      control: 'text',
      description: 'The source of the image',
    },
    fallback: {
      control: 'text',
      description: 'The fallback text of the avatar',
    },
  },
  args: {
    source: 'https://github.com/shadcn.png',
    fallback: 'CN',
  },
};

export default meta;
type Story = StoryObj<ExtendedAvatarProps>;

export const Default: Story = {
  render: args => (
    <Avatar>
      <AvatarImage src={args.source} />
      <AvatarFallback>{args.fallback}</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: _ => (
    <Avatar>
      <AvatarImage src="https://invalid-url.com/image.png" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const FallbackOnly: Story = {
  render: _ => (
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const DifferentSizes: Story = {
  render: _ => (
    <div className="flex items-center gap-4">
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className="size-24">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: _ => (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/evilrabbit.png" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithStatusIndicator: Story = {
  render: _ => (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Online" />
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>
        <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-white bg-green-500" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="Away" />
          <AvatarFallback>AW</AvatarFallback>
        </Avatar>
        <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-white bg-yellow-500" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
        <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-white bg-gray-500" />
      </div>
    </div>
  ),
};

export const SquareAvatar: Story = {
  render: _ => (
    <Avatar className="rounded-md">
      <AvatarImage src="https://github.com/shadcn.png" alt="Square" />
      <AvatarFallback>SQ</AvatarFallback>
    </Avatar>
  ),
};
