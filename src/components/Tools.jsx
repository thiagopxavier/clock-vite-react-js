import { useState } from 'react';
import Clock from './Clock';

function Tools() {
  const [use, setUse] = useState(0);
  switch (use) {
  case 0:
    return <Clock />;
  default:
    break;
  }
}

export default Tools;
