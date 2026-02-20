import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component: `
A drawer component for React.

For more information, see the <a href="https://ui.shadcn.com/docs/components/drawer" target="_blank" style="text-decoration: underline;">Shadcn Drawer documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const BottomDrawer: Story = {
  render: _ => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open bottom drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Bottom drawer</DrawerTitle>
          <DrawerDescription>
            Use drawers to show additional content without leaving the current screen.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
