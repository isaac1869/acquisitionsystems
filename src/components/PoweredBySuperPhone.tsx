export default function PoweredBySuperPhone() {
  return (
    <section className="py-12 md:py-16 px-6 border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Powered by
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-lg">
            SuperPhone®
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center md:text-left max-w-xs">
          SMS infrastructure by Ryan Leslie
        </p>
      </div>
    </section>
  );
}
