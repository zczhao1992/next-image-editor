import { useEvent } from "react-use";

export const useWindowEvents = () => {
  useEvent("beforeunload", (event) => {
    (event || window.event).returnValue = "确定要离开吗?";
  });
};
