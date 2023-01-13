import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "./use-theme";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  width: 6.2rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  text-transform: capitalize;
`;

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === "light" ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}
      <span>{theme} Theme</span>
    </ModeSwitcher>
  );
};

export default ThemeSwitcher;
