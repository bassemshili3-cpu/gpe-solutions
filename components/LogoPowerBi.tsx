export default function LogoPowerBI() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-yellow-400/25 via-orange-400/15 to-amber-400/25 blur-2xl animate-pulse" />
        <div className="absolute -inset-[5px] bg-gradient-to-br from-yellow-600 via-white to-amber-600 opacity-30 blur-[5px]" />

        <div className="group relative flex h-29 w-29 items-center justify-center">
          <img
            src="/powerbi_logo.png"
            alt="Power BI"
            className="h-28 w-auto object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
