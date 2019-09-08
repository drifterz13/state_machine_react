import React, { useState } from "react";
import HelmentSVG from "../assets/helmet.svg";
import ShieldSVG from "../assets/shield.svg";
import ArmorSVG from "../assets/armor.svg";

const KNIGHT_WEAPON = {
  SHIELD: "shield",
  ARMOR: "armor",
  HELPMET: "helmet"
};

export default function KnightEquipment() {
  const [weapon, setWeapon] = useState("");

  return (
    <div className="h-100">
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="radio"
          checked={weapon === KNIGHT_WEAPON.SHIELD}
          id="knightShield"
          onChange={() => setWeapon(KNIGHT_WEAPON.SHIELD)}
        />
        <label className="form-check-label" htmlFor="knightShield">
          <img src={ShieldSVG} height="40" alt="knight shield" />
          <span className="ml-1">Power shield (def +120)</span>
        </label>
      </div>
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="radio"
          checked={weapon === KNIGHT_WEAPON.ARMOR}
          id="knightArmor"
          onChange={() => setWeapon(KNIGHT_WEAPON.ARMOR)}
        />
        <label className="form-check-label" htmlFor="knightArmor">
          <img src={ArmorSVG} height="40" alt="knight aromor" />
          <span className="ml-1">Steel Armor (def +200)</span>
        </label>
      </div>
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="radio"
          checked={weapon === KNIGHT_WEAPON.HELPMET}
          id="knightHelmet"
          onChange={() => setWeapon(KNIGHT_WEAPON.HELPMET)}
        />
        <label className="form-check-label" htmlFor="knightHelmet">
          <img src={HelmentSVG} height="40" alt="knight helmet" />
          <span className="ml-1">Metal Armor (def +100)</span>
        </label>
      </div>
    </div>
  );
}
