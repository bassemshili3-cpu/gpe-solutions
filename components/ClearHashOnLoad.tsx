"use client";

import { useEffect } from "react";

export default function ClearHashOnLoad() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) {
      // garde l'URL propre, sans changer l'historique
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      // optionnel: remonte en haut
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  return null;
}
