import React from 'react';
import Homepage from 'src/views/Homepage';

export default function Home() {
  return (
    <React.Suspense>
      <Homepage />
    </React.Suspense>
  );
}
