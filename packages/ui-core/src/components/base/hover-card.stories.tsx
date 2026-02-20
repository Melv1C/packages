import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
  parameters: {
    docs: {
      description: {
        component: `
For sighted users to preview content available behind a link.

For more information, see the <a href="https://ui.shadcn.com/docs/components/hover-card" target="_blank" style="text-decoration: underline;">Shadcn Hover Card documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: _ => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">shadcn</p>
              <p className="text-muted-foreground text-xs">@shadcn</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">Building a component library.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
