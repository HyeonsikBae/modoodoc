import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilter } from "../../store/slices/filterSlice";
import Span from "../utils/Span";

type FilterButtonProps = {
  isClicked: boolean;
};

const FilterButton = styled.input`
  border-radius: 20%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  width: 6rem;
  height: 2rem;
`;

interface FilterProps {
  filters: string[];
}

const Filter = (props: FilterProps): JSX.Element => {
  const { filters } = props;
  const storedFilter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onClickHandler = (filter: string): void => {
    if (storedFilter !== filter) {
      dispatch(setFilter(filter));
    }
  };

  const renderFilters = (): JSX.Element[] => {
    return filters.map((filter) => {
      return (
        <Label key={filter} htmlFor={filter}>
          <FilterButton type="radio" name="filter" id={filter} value={filter} />
          <Span>{filter}</Span>
        </Label>
      );
    });
  };

  return (
    <div style={{ display: "flex", overflow: "auto" }}>{renderFilters()}</div>
  );
};

export default Filter;
