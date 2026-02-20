import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from './context-menu';

const meta: Meta<typeof ContextMenu> = {
  component: ContextMenu,
  parameters: {
    docs: {
      description: {
        component: `
Displays a menu to the user — such as a set of actions or functions — triggered by a button.

For more information, see the <a href="https://ui.shadcn.com/docs/components/context-menu" target="_blank" style="text-decoration: underline;">Shadcn Context Menu documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: _ => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="text-muted-foreground flex h-32 w-72 items-center justify-center rounded-md border text-sm">
          Right-click anywhere in this area
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem inset>Back</ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
        </ContextMenuItem>
        <ContextMenuItem inset>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Save as…
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Print…
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>Appearance</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>Show status bar</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show bookmarks bar</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Zoom</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Zoom In</ContextMenuItem>
            <ContextMenuItem>Zoom Out</ContextMenuItem>
            <ContextMenuItem>Reset</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="system">
          <ContextMenuLabel inset>Theme</ContextMenuLabel>
          <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
