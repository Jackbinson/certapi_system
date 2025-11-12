import React from 'react';
// Import the correct screen component
import { Certificate } from './screen/Certificate/Certificate';

// 1. Global styles, variables, and Tailwind utilities
import './index.css';

// 2. Component-specific styles
import './App.css';

function App() {
  // Render the Certificate screen instead of the old layout
  return <Certificate />;
}

export default App;
