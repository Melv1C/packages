import { LoginForm } from '@melv1c/ui-core';

export default function LoginFormMinimal() {
  return (
    <LoginForm
      showForgotPassword={false}
      showSignUp={false}
      onSubmit={async (email, password) => {
        console.log('Login attempt:', email, password);
      }}
    />
  );
}
