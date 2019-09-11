import React from "react";
import styled from "@emotion/styled";
import Portal from "./Portal";
import KnightSVG from "../assets/knight.svg";
import WiseSVG from "../assets/wise.svg";
import KnightEquipment from "./KnightEquipment";
import WiseEquipment from "./WiseEquipment";
import { useService } from "@xstate/react";

const ModalBackground = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Card = styled.div`
  width: 30em;
  height: 350px;
  margin: 100px auto;
`;

const Frame = styled.div`
  border: 2px solid;
  border-radius: 2px;
  padding: 12px;
  margin-bottom: 10px;
  color: #222;
  background: ${props => (props.selected ? "#ff5253" : "inherit")};
  &:hover {
    cursor: pointer;
    background: #ff5253;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 200px;
`;

const Xmark = styled.span`
  font-size: 18px;
  margin-left: auto;
  color: salmon;
  &:hover {
    cursor: pointer;
  }
`;

const ListContainer = styled.ul`
  box-sizing: border-box;
  width: 140px;
`;

const BackButton = styled.span`
  display: block;
  width: 40px;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

export default function Modal(props) {
  const [current, send] = useService(props.service);

  const renderKnightOption = () => (
    <Box>
      <Frame
        selected={current.matches("open.knight")}
        onClick={() => {
          if (current.matches("open.wise")) {
            send("SWITCH_CHAR");
          }
        }}
      >
        <img height="70" src={KnightSVG} alt="knight" />
      </Frame>
      <ListContainer>
        <li>Strong troop.</li>
        <li>Endurance.</li>
      </ListContainer>
    </Box>
  );

  const renderWiseOption = () => (
    <Box>
      <Frame
        selected={current.matches("open.wise")}
        onClick={() => {
          if (current.matches("open.knight")) {
            send("SWITCH_CHAR");
          }
        }}
      >
        <img height="70" src={WiseSVG} alt="wise man" />
      </Frame>
      <ListContainer>
        <li>Intelligent.</li>
        <li>Leadership.</li>
        <li>Strategy.</li>
      </ListContainer>
    </Box>
  );

  const renderBody = () => {
    if (current.matches("open.knight.select_weapon.hold")) {
      return <KnightEquipment />;
    } else if (current.matches("open.wise.select_weapon.hold")) {
      return <WiseEquipment />;
    } else if (current.matches("open")) {
      return (
        <React.Fragment>
          <div className="d-flex justify-content-center flex-grow-1 h-100">
            {renderKnightOption()}
            {renderWiseOption()}
          </div>
        </React.Fragment>
      );
    }
  };

  const renderFooter = () => {
    if (
      current.matches("open.knight.select_character") ||
      current.matches("open.wise.select_character")
    ) {
      return (
        <button
          className="btn btn-primary btn-lg rounded-0"
          onClick={() => send("SWITCH")}
        >
          Next
        </button>
      );
    }

    return (
      <React.Fragment>
        <button
          onClick={() => send("TOGGLE")}
          className="btn btn-primary btn-lg btn-block rounded-0 mb-2"
        >
          Done
        </button>
        <BackButton
          className="text-primary text-center"
          onClick={() => send("SWITCH")}
        >
          Back
        </BackButton>
      </React.Fragment>
    );
  };

  if (!props.show) return null;

  return (
    <Portal>
      <ModalBackground>
        <Card className="card">
          <div className="card-body">
            <div className="d-flex flex-column h-100">
              <Xmark className="text-right" onClick={() => send("TOGGLE")}>
                X
              </Xmark>
              {renderBody()}
              {renderFooter()}
            </div>
          </div>
        </Card>
      </ModalBackground>
    </Portal>
  );
}
