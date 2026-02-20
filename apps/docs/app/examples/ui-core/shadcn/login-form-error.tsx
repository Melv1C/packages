'use client';

import { LoginForm, UIKitProvider } from '@melv1c/ui-core';

export default function LoginFormError() {
  return (
    <UIKitProvider>
      <LoginForm
        onSubmit={async () => {
          await new Promise((resolve) => setTimeout(resolve, 800));
          throw new Error('Invalid email or password. Please try again.');
        }}
        onForgotPassword={() => console.log('Forgot password')}
        onSignUp={() => console.log('Sign up')}
      />
    </UIKitProvider>
  );
}
