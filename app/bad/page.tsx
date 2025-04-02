"use client";

import { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  return (
    <div>
      hello
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Click me! ({count})
      </button>
    </div>
  );
}
