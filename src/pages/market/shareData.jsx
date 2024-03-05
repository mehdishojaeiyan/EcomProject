// useSharedState.js
import { useState } from 'react';

export function useSharedState(initialValue) {
  const [state, setState] = useState(initialValue);

  const updateState = (newValue) => {
    setState(newValue);
  };

  return [state, updateState];
}
