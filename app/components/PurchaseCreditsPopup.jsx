import { useState, useEffect } from "react";
import "./PurchaseCreditsPopup.css"; // Import the CSS file

function generateLicenseCode(type) {
  const suffix = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `LIC-${type}-${suffix}`;
}

function estimateTokens(text = "") {
  return Math.ceil(text.length / 4);
}

function PurchaseCreditsPopup({ onLicenseCodeSubmit, currentCredit }) {
  const [licenseCode, setLicenseCode] = useState("");
  const [licenseFeedback, setLicenseFeedback] = useState("");
  const [showLowTokenWarning, setShowLowTokenWarning] = useState(false);

  useEffect(() => {
    setShowLowTokenWarning(currentCredit !== undefined && currentCredit < 20);
  }, [currentCredit]);

  const handleSubmit = () => {
    const normalized = licenseCode.trim().toUpperCase();
    if (normalized.startsWith("LIC-")) {
      const parts = normalized.split("-");
      let amount = 0;
      if (parts[1] === "1WEEK") amount = 100;
      else if (parts[1] === "1MONTH") amount = 300;
      else if (parts[1] === "3MONTH") amount = 700;
      else if (parts[1] === "CUSTOM") amount = parseInt(parts[2]) || 0;

      if (amount > 0) {
        onLicenseCodeSubmit(amount);
        setLicenseFeedback(`✅ ${amount} token başarıyla yüklendi!`);
        setLicenseCode("");
      } else {
        setLicenseFeedback("❌ Geçersiz lisans türü.");
      }
    } else {
      setLicenseFeedback("❌ Lisans kodu formatı hatalı.");
    }
  };

  return (
    <div>
      {showLowTokenWarning && (
        <div className="token-warning-modal">
          <h2>Token Yükleme</h2>
          <p>
            Ödeme yaptıysanız aldığınız lisans kodunu buraya girerek tokenlerinizi
            aktive edebilirsiniz.
          </p>
          <input
            type="text"
            placeholder="Lisans Kodunu Girin (örnek: LIC-1WEEK-XYZ123)"
            value={licenseCode}
            onChange={(e) => setLicenseCode(e.target.value)}
          />
          <button onClick={handleSubmit}>✅ Lisansı Uygula</button>
          {licenseFeedback && <p>{licenseFeedback}</p>}
        </div>
      )}
    </div>
  );
}

export { PurchaseCreditsPopup, generateLicenseCode, estimateTokens };
