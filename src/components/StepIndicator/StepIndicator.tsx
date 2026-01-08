export const StepIndicator: React.FC = () => {
  const steps = [
    { label: "раз", tooltip: "Покупка билета", done: true },
    { label: "два", tooltip: "Регистрация", done: true },
    { label: "три", tooltip: "Дополнительные услуги", active: true },
    { label: "лети", tooltip: "Посадочный талон" },
  ];

  return (
    <div className="flex flex-row items-start sm:items-center gap-3">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            title={s.tooltip}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center
              text-xs text-white transition-shadow
              ${s.done || s.active ? "bg-[#5f7f6a]" : "bg-gray-300"}
              ${s.active ? "ring-4 ring-[#5f7f6a]/30 shadow-md" : ""}
            `}
          >
            {s.label}
          </div>

          {i < steps.length - 1 && (
            <div className="w-6 h-[2px] bg-[#5f7f6a]" />
          )}
        </div>
      ))}
    </div>
  );
};
