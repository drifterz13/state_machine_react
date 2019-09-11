import React from "react";
import { useMachine } from "@xstate/react";
import Modal from "./Modal";
import styled from "@emotion/styled";
import { characterModalMachine } from "../machine/CharacterModalMachine";

const MiddleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function Example() {
  const [current, send, service] = useMachine(characterModalMachine, { devTools: true })

  return (
    <div className="container text-center">
      <MiddleContainer>
        <button className="btn btn-primary rounded-0" onClick={() => send('TOGGLE')}>
          Open
        </button>
      </MiddleContainer>
      <Modal show={current.matches('open')} onClose={() => send('TOGGLE')} service={service} />
    </div>
  );
}
