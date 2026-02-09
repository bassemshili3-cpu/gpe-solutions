export default function LogoSage() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-xl animate-pulse" />
        <div className="absolute -inset-[5px] bg-gradient-to-br from-blue-900 via-white to-violet-900 opacity-50 blur-[5px]" />

        <div className="group relative flex h-21 w-37 items-center justify-center">
          <img
            src="/Sage_logo.png"
            alt="Sage"
            className="h-27 w-auto object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
