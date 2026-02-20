import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginForm } from './login-form';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  parameters: {
    docs: {
      description: {
        component: `
A reusable login form block with support for:
- Email and password authentication
- Social login providers (Google, GitHub, Apple, Microsoft, Facebook)
- Forgot password link
- Sign up link
- Full internationalization support

All text is automatically translated based on the current locale.
        `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    providers: [],
    showForgotPassword: true,
    showSignUp: true,
    title: undefined,
    description: undefined,
    onSubmit: async () => {
      console.log('Form submitted');
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Invalid email or password');
    },
    onProviderLogin: () => console.log('Provider login clicked'),
    onForgotPassword: () => {
      console.log('Forgot password clicked');
    },
    onSignUp: () => {
      console.log('Sign up clicked');
    },
  },
  argTypes: {
    providers: {
      control: 'check',
      options: ['google', 'github', 'apple', 'microsoft', 'facebook'],
      description: 'Social login providers to display',
    },
    showForgotPassword: {
      control: 'boolean',
      description: 'Show the forgot password link',
    },
    showSignUp: {
      control: 'boolean',
      description: 'Show the sign up link',
    },
    title: {
      control: 'text',
      description: 'Custom title (overrides translation)',
    },
    description: {
      control: 'text',
      description: 'Custom description (overrides translation)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  render: args => <LoginForm {...args} />,
};
