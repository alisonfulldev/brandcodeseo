const stats = [
  { number: "+150", label: "sites entregues" },
  { number: "+80", label: "clientes ativos" },
  { number: "23", label: "estados atendidos" },
] as const;

export default function SocialProof() {
  return (
    <div className="bg-[#0A1628] border-y border-blue-900/50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-10 sm:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.number} className="flex items-center gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>

              {i < stats.length - 1 && (
                <div
                  className="hidden sm:block h-12 w-px bg-blue-900"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
