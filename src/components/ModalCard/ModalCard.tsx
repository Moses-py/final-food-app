import React from "react";
import { ModalCardChildren, ModalCardContainer } from "./styles/ModalCard";
import Modal from "../Modal/Modal";
interface ModalCardProps {
  children?: React.ReactNode;
}
const ModalCardModal = ({ children }: ModalCardProps) => {
  return (
    <ModalCardContainer>
      <ModalCardChildren>{children}</ModalCardChildren>
    </ModalCardContainer>
  );
};

export default ModalCardModal;
