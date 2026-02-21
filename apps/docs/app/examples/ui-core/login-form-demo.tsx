import { LoginForm } from '@melv1c/ui-core';

export default function LoginFormDemo() {
  return (
      <LoginForm
        onSubmit={async (email, password) => {
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log('Login attempt:', email, password);
        }}
        onForgotPassword={() => console.log('Forgot password')}
        onSignUp={() => console.log('Sign up')}
      />
  );
}
