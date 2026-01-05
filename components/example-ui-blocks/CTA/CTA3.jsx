export default function Example() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-text sm:text-5xl">
          Boost your productivity. Start using our app today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-chip-blue0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Get started
          </a>
          <a href="#" className="text-sm/6 font-semibold text-text">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
