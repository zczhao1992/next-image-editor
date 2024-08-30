"use client";

import { useEffect, useRef } from "react";
import { useEditor } from "@/features/editor/hooks/use-editor";

export const Editor = () => {
  const { init } = useEditor();

  const canvasRef = useRef(null);
  const containereRef = useRef(null);

  useEffect(() => {
    init();
  }, []);

  return (
    <div ref={containereRef}>
      <canvas ref={canvasRef} />
    </div>
  );
};
