'use client';

import { LoginForm, UIKitProvider } from '@melv1c/ui-core';

export default function LoginFormCustom() {
  return (
    <UIKitProvider>
      <LoginForm
        title="Welcome back"
        description="Sign in to your workspace to continue"
        providers={['google', 'github']}
        onSubmit={async (email, password) => {
          console.log('Login attempt:', email, password);
        }}
        onProviderLogin={(provider) => console.log('Provider login:', provider)}
        onForgotPassword={() => console.log('Forgot password')}
        onSignUp={() => console.log('Sign up')}
      />
    </UIKitProvider>
  );
}
