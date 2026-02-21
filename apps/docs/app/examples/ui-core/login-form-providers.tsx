import { LoginForm } from '@melv1c/ui-core';

export default function LoginFormProviders() {
  return (
      <LoginForm
        providers={['google', 'github', 'apple', 'microsoft', 'facebook']}
        onSubmit={async (email, password) => {
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log('Login attempt:', email, password);
        }}
        onProviderLogin={provider => console.log('Provider login:', provider)}
        onForgotPassword={() => console.log('Forgot password')}
        onSignUp={() => console.log('Sign up')}
      />
  );
}
