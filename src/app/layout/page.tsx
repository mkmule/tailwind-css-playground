'use client';

const LayoutPage = () => {
  return (
    <main className="h-full w-full grid-rows-[1fr_6fr_1fr] grid-cols-[1fr_6fr] grid">
      <header className="bg-red-300 col-span-2">Header</header>
      <nav className="bg-green-300">Sidebar</nav>
      <section className="bg-yellow-300">Main</section>
      <footer className="bg-blue-300 col-span-2">Footer</footer>
    </main>
  );
};

export default LayoutPage;
