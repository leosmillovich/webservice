import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    __openConsent?: () => void;
  }
}

type Prefs = {
  analytics: boolean;
  ads: boolean;
};

const LS_KEY = "consent.choice.v2"; // {status:'accepted'|'rejected'|'custom', prefs:{analytics,ads}}

function sendConsentUpdate(prefs: Prefs) {
  const granted = (b: boolean) => (b ? "granted" : "denied");
  const payload = {
    ad_storage: granted(prefs.ads),
    analytics_storage: granted(prefs.analytics),
    ad_user_data: granted(prefs.ads),
    ad_personalization: granted(prefs.ads),
    functionality_storage: "granted",
    security_storage: "granted",
  };
  // usa gtag si está, si no, manda al dataLayer (GTM lo recoge)
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", payload);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "consent_update", ...payload });
  }
}

export default function ConsentBanner() {
  const [show, setShow] = useState(false);
  const [tabOpen, setTabOpen] = useState<"main" | "custom">("main");
  const [prefs, setPrefs] = useState<Prefs>({ analytics: false, ads: false });

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) {
      setShow(true);
    } else {
      try {
        const saved = JSON.parse(raw) as { status: string; prefs: Prefs };
        setPrefs(saved.prefs);
      } catch {}
    }
    // Exponer reabrir preferencias
    window.__openConsent = () => setShow(true);
    return () => { delete window.__openConsent; };
  }, []);

  const acceptAll = () => {
    const newPrefs: Prefs = { analytics: true, ads: true };
    sendConsentUpdate(newPrefs);
    localStorage.setItem(LS_KEY, JSON.stringify({ status: "accepted", prefs: newPrefs }));
    setShow(false);
  };

  const rejectAll = () => {
    const newPrefs: Prefs = { analytics: false, ads: false };
    sendConsentUpdate(newPrefs);
    localStorage.setItem(LS_KEY, JSON.stringify({ status: "rejected", prefs: newPrefs }));
    setShow(false);
  };

  const saveCustom = () => {
    sendConsentUpdate(prefs);
    localStorage.setItem(LS_KEY, JSON.stringify({ status: "custom", prefs }));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/30 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl border border-gray-200">
        <div className="p-4 sm:p-6">
          <h2 className="text-lg font-semibold">Preferencias de cookies</h2>
          {tabOpen === "main" ? (
            <p className="mt-2 text-sm text-gray-700">
              Usamos cookies y almacenamiento local para funciones esenciales y, si lo autorizás, para{" "}
              <strong>analítica</strong> y <strong>publicidad</strong>. Podés
              aceptar, rechazar o configurar tus preferencias. Más info en{" "}
              <a href="/privacidad" className="underline">Privacidad & Cookies</a>.
            </p>
          ) : (
            <div className="mt-3 space-y-3">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                />
                <div>
                  <div className="font-medium">Analytics (GA4)</div>
                  <div className="text-sm text-gray-600">
                    Nos ayuda a medir visitas y rendimiento. Si lo desactivás, no cargaremos analytics.
                  </div>
                </div>
              </label>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={prefs.ads}
                  onChange={(e) => setPrefs((p) => ({ ...p, ads: e.target.checked }))}
                />
                <div>
                  <div className="font-medium">Publicidad</div>
                  <div className="text-sm text-gray-600">
                    Permite funciones de anuncios, personalización y medición publicitaria.
                  </div>
                </div>
              </label>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2 justify-end">
            {tabOpen === "main" ? (
              <>
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50"
                >
                  Rechazar todo
                </button>
                <button
                  onClick={() => setTabOpen("custom")}
                  className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50"
                >
                  Configurar
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                >
                  Aceptar todo
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setTabOpen("main")}
                  className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50"
                >
                  Volver
                </button>
                <button
                  onClick={saveCustom}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                >
                  Guardar preferencias
                </button>
              </>
            )}
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Esenciales siempre activas (funcionalidad y seguridad). Podés cambiar tu decisión cuando quieras.
          </p>
        </div>
      </div>
    </div>
  );
}
