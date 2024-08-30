import { useCallback } from "react";

interface initialProps {
  initialCanvas: any;
  initialContainer: HTMLDivElement;
}

export const useEditor = () => {
  const init = useCallback(
    ({ initialCanvas, initialContainer }: initialProps) => {
      console.log("ddddddddddd");
    },
    []
  );

  return { init };
};
