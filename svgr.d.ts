declare module '*.svg' {
  import { FC } from 'react';
  const content: FC<{ className?: string }>;
  export default content;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default content;
}
