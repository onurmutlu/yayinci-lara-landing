import React from "react";
import { PurchaseCreditsPopup } from "../components/PurchaseCreditsPopup";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-purple-300">YAYINCI-LARA</h1>
      <p className="text-gray-400 mt-4 text-center max-w-xl">
        GPT destekli içerik önerileriyle yayıncılara otomatik Telegram yönetimi sunan akıllı kontrol paneli.
      </p>
      <div className="mt-8">
        <PurchaseCreditsPopup onLicenseCodeSubmit={(amount) => alert(`Token: ${amount}`)} currentCredit={10} />
      </div>
    </div>
  );
}
