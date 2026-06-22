export default function Layout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <div className="w-screen h-screen p-4 bg-green-100">
      <h1 className="text-2xl font-bold">V5 Layout</h1>
      {children}
      {modal}
    </div>
  );
} 