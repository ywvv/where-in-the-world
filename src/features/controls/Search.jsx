import styled from "styled-components";

import { useSearch } from "./use-search";

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  background-color: var(--colors-ui-base);
  color: var(--color-text);
  padding: 1rem 1rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  outline: none;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

export const Search = () => {
  const [search, handleSearch] = useSearch();

  return <Input onChange={handleSearch} value={search} />;
};
