import React, { useState } from "react";
import Modal from "./Modal";
import styled from "@emotion/styled";

const MiddleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function Example() {
  const [isModalOpen, setModalVisibility] = useState(false);
  const onOpenModal = () => setModalVisibility(true);
  const onCloseModal = () => setModalVisibility(false);

  return (
    <div className="container text-center">
      <MiddleContainer>
        <button className="btn btn-primary rounded-0" onClick={onOpenModal}>
          Open
        </button>
      </MiddleContainer>
      <Modal show={isModalOpen} onClose={onCloseModal} />
    </div>
  );
}
