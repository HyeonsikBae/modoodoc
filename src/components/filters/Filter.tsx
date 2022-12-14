import React, { useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilter } from "../../store/slices/filterSlice";
import theme from "../../styles/theme";
import Span from "../utils/Span";

const FilterButton = styled.input`
  display: none;
`;

const Label = styled.label`
  margin: 0 0.2rem;
  padding: 0 0.5rem;
  height: 1.5rem;
  border: 1px solid ${theme.colors.lightPurple};
  border-radius: 5rem;
`;

interface FilterProps {
  hospital: number;
}

const Filter = (props: FilterProps): JSX.Element => {
  const { hospital } = props;
  const storedFilter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const clickHandler = useCallback((filter: string): void => {
    if (storedFilter.filter !== filter) {
      dispatch(setFilter(filter));
    }
  }, []);

  const renderFilters = useCallback((): JSX.Element[] => {
    if (storedFilter[`${hospital}`]) {
      const array = Array.from(storedFilter[`${hospital}`][0]);

      return array.map((treat: any) => {
        return (
          <Label key={treat} htmlFor={treat}>
            <Span whiteSpace="nowrap" fontSize="0.8rem">
              {treat}
            </Span>
            <FilterButton
              type="radio"
              name="filter"
              id={treat}
              value={treat}
              onClick={(): void => clickHandler(treat)}
            />
          </Label>
        );
      });
    }

    const rtn = [];
    rtn.push(<div key={1}>Loading</div>);
    rtn.push(<div key={2}>...</div>);
    return rtn;
  }, [storedFilter]);

  return (
    <div style={{ display: "flex", overflowX: "auto" }}>{renderFilters()}</div>
  );
};

export default Filter;
