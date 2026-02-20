'use client';

import { LoginForm, UIKitProvider } from '@melv1c/ui-core';

export default function LoginFormMinimal() {
  return (
    <UIKitProvider>
      <LoginForm
        showForgotPassword={false}
        showSignUp={false}
        onSubmit={async (email, password) => {
          console.log('Login attempt:', email, password);
        }}
      />
    </UIKitProvider>
  );
}
