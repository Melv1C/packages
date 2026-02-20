import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from './navigation-menu';

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  parameters: {
    docs: {
      description: {
        component: `
A collection of links for navigating websites.

For more information, see the <a href="https://ui.shadcn.com/docs/components/navigation-menu" target="_blank" style="text-decoration: underline;">Shadcn Navigation Menu documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => (
    <div className="h-[360px]">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[320px] gap-2 p-2">
                <NavigationMenuLink className="hover:bg-accent rounded-md p-2">
                  <p className="text-sm font-medium">Getting started</p>
                  <p className="text-muted-foreground text-xs">
                    Learn how to integrate the navigation menu.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:bg-accent rounded-md p-2">
                  <p className="text-sm font-medium">Components</p>
                  <p className="text-muted-foreground text-xs">
                    Explore built-in navigation components.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Examples</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[320px] gap-2 p-2">
                <NavigationMenuLink className="hover:bg-accent rounded-md p-2">
                  <p className="text-sm font-medium">Dashboard</p>
                  <p className="text-muted-foreground text-xs">
                    See a complex navigation configuration.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  ),
};
