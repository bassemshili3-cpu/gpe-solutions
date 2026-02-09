import LogoSage from "@/components/LogoSage";
import LogoPowerBI from "@/components/LogoPowerBi";

export default function PartnershipLogos({ visible }: { visible: boolean }) {
  const base = "transform-gpu transition-all ease-out";
  const hidden = "opacity-0";
  const shown = "opacity-100";
  const EASE_SMOOTH = "cubic-bezier(0.16, 1, 0.3, 1)"; // très doux

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6">
      {/* Phrase (optionnel) */}
      <p
        className="
          text-center text-xl xl:text-2xl font-semibold tracking-tight
          bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600
          bg-clip-text text-transparent drop-shadow-sm
        "
        style={{
          transition: "all 1000ms ease-out",
          transitionDelay: "0ms",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateZ(0px) scale(1)" : "translateZ(-80px) scale(0.96)",
          filter: visible ? "none" : "blur(6px)",
        }}
      >
        Lorsque la gestion de la paie s'allie avec l'informatique 
      </p>

      <div className="flex items-center justify-center gap-6 sm:gap-18">
        {/* SAGE d'abord */}
        <div
          className={`${base} ${visible ? shown : hidden}`}
          style={{
            transitionDuration: "3500ms",
            transitionTimingFunction: EASE_SMOOTH,
            transitionDelay: "0ms",
            transformStyle: "preserve-3d",
            transform: visible
              ? "translateZ(0px) scale(1)"
              : "translateZ(-120px) scale(0.92)",
            filter: visible ? "none" : "blur(4px)",
          }}
        >
          <LogoSage />
        </div>

        {/* X (au milieu) */}
        <span
          className="text-3xl sm:text-4xl font-bold text-white select-none"
          style={{
            transition: "all 3000ms ease-out",
            transitionDelay: "1000ms",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.9)",
          }}
        >
          ×
        </span>

        {/* Power BI ensuite */}
        <div
          className={`${base} ${visible ? shown : hidden}`}
          style={{
            transitionDuration: "3500ms",
            transitionTimingFunction: EASE_SMOOTH,
            transitionDelay: "2200ms", // ✅ arrive après Sage
            transformStyle: "preserve-3d",
            transform: visible
              ? "translateZ(0px) scale(1)"
              : "translateZ(-120px) scale(0.92)",
            filter: visible ? "none" : "blur(4px)",
          }}
        >
          <LogoPowerBI />
        </div>
      </div>
    </div>
  );
}
