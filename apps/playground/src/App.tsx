import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from '@melv1c/ui-core';
import { useState } from 'react';

export function App() {
  const [name, setName] = useState('World');

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>UI Core Playground</CardTitle>
          <CardDescription>
            Small local sandbox for trying components quickly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter a name"
          />
          <p className="text-sm">Hello, {name || 'World'} 👋</p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button onClick={() => setName('World')}>Reset</Button>
          <Button
            variant="secondary"
            onClick={() => setName((value) => value.toUpperCase())}
          >
            Uppercase
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
