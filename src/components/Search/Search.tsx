import React from "react";
import InputField from "../InputField/InputField";
import ModalPortal from "../Modal/Modal";
import { SearchInputContainer } from "./styles/Search.js";

// const Search = () => {
//   return (
//     <ModalPortal>
//       <SearchInputModal />
//     </ModalPortal>
//   );
// };

const SearchInputModal = () => {
  return (
    <SearchInputContainer>
      <InputField />
    </SearchInputContainer>
  );
};

export default SearchInputModal;
