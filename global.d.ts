// custom.d.ts
import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends React.DOMAttributes<T> {
    'data-test-id'?: string;
  }
}