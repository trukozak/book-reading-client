import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { useTranslation } from "react-i18next";
import { getPlannedBooks } from "../../../../redux/books/booksSelectors";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedBook,
  setPlannedBooksForSelect,
  removePlannedBook,
} from "../../../../redux/target/targetActions";
import { getAllPlannedBooks } from "../../../../redux/target/targetSelectors";

import SelectBooksStyled from "./SelectBooksStyled";

import sprite from "../../../../images/sprite.svg";
import useWindowDimensions from "../../../../hooks/resize";

const CaretDownIcon = () => {
  return (
    <svg className="selectBooksIconPolygon">
      <use href={sprite + "#icon-polygon"} />
    </svg>
  );
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

const SelectBooks = ({ toggleModal }) => {
  const { t } = useTranslation();

  const clientsWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(clientsWidth < 768);
  }, [clientsWidth]);

  const dispatch = useDispatch();
  const books = useSelector(getPlannedBooks);
  const plannedBooks = useSelector(getAllPlannedBooks);
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    dispatch(setPlannedBooksForSelect(plannedBooks));
  }, [plannedBooks, dispatch]);

  const handleSelectBook = (selectedOption) => {
    const { value } = selectedOption;
    setSelectedBook(value);
  };

  const addBookToSelected = () => {
    dispatch(addSelectedBook(selectedBook));
    dispatch(removePlannedBook(selectedBook));
    if (isMobile) toggleModal();
  };

  const options = plannedBooks.map(({ name, author, year, pages, _id }) => ({
    value: { name, author, year, pages, _id },
    label: name,
  }));

  return (
    <SelectBooksStyled>
      <Select
        options={options}
        closeMenuOnSelect={true}
        onChange={handleSelectBook}
        components={{ DropdownIndicator }}
      />
      <button className="selectBooksButton" onClick={addBookToSelected}>
        {t("Add")}
      </button>
    </SelectBooksStyled>
  );
};

export default SelectBooks;
