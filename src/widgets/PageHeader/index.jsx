export function PageHeader({ title, rightContent }) {
  return (
    <header className="py-6 bg-primary/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          {rightContent}
        </div>
      </div>
    </header>
  );
}
