import React from "react";
import { Biography } from "./Biography";
import { RezumePhoto } from "./RezumePhoto";

export function Header() {
  return (
    <div className="flex flex-row justify-between">
      <RezumePhoto />
      <Biography />
    </div>
  );
}
