import type { ReactNode } from "react";

export default function UIBlocksLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Minimal header - just a simple top bar */}
      <div className="fixed inset-x-0 top-0 z-40 border-b border-border bg-surface/90 backdrop-blur-xl">
        <div className="px-4 py-3 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold text-text">UI Blocks Library</h1>
        </div>
      </div>
      {/* Content starts below the minimal header */}
      <div className="pt-14">{children}</div>
    </div>
  );
}
