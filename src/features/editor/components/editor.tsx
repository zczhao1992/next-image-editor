"use client";

import { fabric } from "fabric";
import { useEffect, useRef } from "react";
import { useEditor } from "@/features/editor/hooks/use-editor";

export const Editor = () => {
  const { init } = useEditor();

  const canvasRef = useRef(null);
  const containereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    init({
      initialCanvas: canvas,
      initialContainer: containereRef.current!,
    });
  }, [init]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 h-full bg-muted" ref={containereRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};
