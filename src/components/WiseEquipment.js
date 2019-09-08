import React, { useState } from "react";
import TorchSVG from "../assets/torch.svg";
import AmphoraSVG from "../assets/amphora.svg";
import HornSVG from "../assets/horn.svg";

const WISE_WEAPON = {
  TORCH: "torch",
  HORN: "horn",
  AMPHORA: "amphora"
};

export default function WiseEquipment() {
  const [weapon, setWeapon] = useState("");

  return (
    <div className="h-100">
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="radio"
          id="wiseHorn"
          checked={weapon === WISE_WEAPON.HORN}
          onChange={() => setWeapon(WISE_WEAPON.HORN)}
        />
        <label className="form-check-label" htmlFor="wiseHorn">
          <img src={HornSVG} height="40" alt="horn's wiseman" />
          <span className="ml-1">Ancient horn (int +80)</span>
        </label>
      </div>
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="radio"
          id="wiseTorch"
          checked={weapon === WISE_WEAPON.TORCH}
          onChange={() => setWeapon(WISE_WEAPON.TORCH)}
        />
        <label className="form-check-label" htmlFor="wiseTorch">
          <img src={TorchSVG} height="40" alt="torch's wiseman" />
          <span className="ml-1">Torch (lux +90)</span>
        </label>
      </div>
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="radio"
          id="wiseAmphora"
          checked={weapon === WISE_WEAPON.AMPHORA}
          onChange={() => setWeapon(WISE_WEAPON.AMPHORA)}
        />
        <label className="form-check-label" htmlFor="wiseAmphora">
          <img src={AmphoraSVG} height="40" alt="amphora's wiseman" />
          <span className="ml-1">Mythical amphora (all +50)</span>
        </label>
      </div>
    </div>
  );
}
