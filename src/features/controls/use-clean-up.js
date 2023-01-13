import { useDispatch } from "react-redux";
import { clearControls } from "./controls-slice";

export const useCleanUp = () => {
  const dispatch = useDispatch();
  return () => dispatch(clearControls());
};
