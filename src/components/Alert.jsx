const Alert = ({ type, text }) => {
  const isDanger = type === "danger";

  return (
    <div className="fixed top-20 inset-x-0 z-[60] flex justify-center px-4 pointer-events-none">
      <div
        role="alert"
        className={`card-in pointer-events-auto flex items-center gap-3 rounded-xl px-4 py-3 max-w-md shadow-glow backdrop-blur-md border ${
          isDanger
            ? "bg-red-500/15 border-red-400/40 text-red-50"
            : "bg-emerald-500/15 border-emerald-400/40 text-emerald-50"
        }`}
      >
        <span
          className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full font-satoshi ${
            isDanger ? "bg-red-500/30" : "bg-emerald-500/30"
          }`}
        >
          {isDanger ? "Error" : "Sent"}
        </span>
        <p className="text-sm font-satoshi leading-snug">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
