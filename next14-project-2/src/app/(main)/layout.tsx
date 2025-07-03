export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6">
      <header className="text-xl font-bold mb-4">🌐 Main Layout</header>
      {children}
    </div>
  );
}
