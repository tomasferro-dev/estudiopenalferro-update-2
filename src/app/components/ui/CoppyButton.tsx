
// src/components/ui/CopyButton.tsx
import { useState } from "react";
import "./CopyButton.css";

/**
 * CopyButton
 * - Copia texto al portapapeles con feedback visual y accesible.
 * - Optimizado para móvil (tamaño táctil, animaciones suaves, estados claros).
 *
 * Props:
 *  - text: string a copiar.
 *  - label?: texto del botón (por defecto "Copiar").
 *  - className?: estilos extra para personalizar.
 */
export default function CopyButton({
  text,
  label = "Copiar",
  className = "",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">(
    "idle"
  );

  const handleCopy = async () => {
    // Evitar múltiples clics mientras copia
    if (status === "copying") return;
    setStatus("copying");

    try {
      // Preferimos la Clipboard API (segura y moderna)
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback para entornos sin clipboard API disponible
        await copyTextWithFallback(text);
      }

      setStatus("copied");
      // Volver al estado normal después de 1.8s
      const timeout = setTimeout(() => setStatus("idle"), 1800);
      // Limpieza por si el componente desmonta antes
      return () => clearTimeout(timeout);
    } catch (e) {
      console.error("No se pudo copiar:", e);
      setStatus("error");
      const timeout = setTimeout(() => setStatus("idle"), 1800);
      return () => clearTimeout(timeout);
    }
  };

  const labelMap = {
    idle: label,
    copying: "Copiando…",
    copied: "¡Copiado!",
    error: "Error",
  };

  return (
    <button
      type="button"
      className={`copy-btn ${className} ${
        status === "copied" ? "is-copied" : ""
      } ${status === "copying" ? "is-copying" : ""}`}
      onClick={handleCopy}
      disabled={status === "copying"}
      aria-live="polite"
      aria-label={labelMap[status]}
      title={labelMap[status]}
    >
      <span className="copy-btn__icon" aria-hidden="true">
        {/* Ícono “copiar” minimalista, visible en dark/light */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="10" height="10" rx="2" />
          <rect x="5" y="5" width="10" height="10" rx="2" />
        </svg>
      </span>
      <span className="copy-btn__text">{labelMap[status]}</span>
    </button>
  );
}

/**
 * Fallback: usa un <textarea> temporal y document.execCommand("copy").
 * Útil para escenarios sin HTTPS o WebViews extrañas.
 */
function copyTextWithFallback(text: string) {
  return new Promise<void>((resolve, reject) => {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, ta.value.length);
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      ok ? resolve() : reject(new Error("execCommand falló"));
    } catch (e) {
      reject(e);
    }
  });
}
