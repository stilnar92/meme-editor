export function Header() {
  return (
    <header className="py-6 bg-primary/50 backdrop-blur-sm fixed top-0 w-full z-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center">Meme Generator</h1>
        <p className="text-gray-400 text-center mt-2">Choose a template to create your meme!</p>
      </div>
    </header>
  );
}
