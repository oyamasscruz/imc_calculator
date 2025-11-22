export default function Header() {
  return (
    <header className="flex items-center justify-center p-8">
      <h1 className="text-5xl text-yellow-500 font-medium mr-10">
        IMC CALCULATOR
      </h1>
      <nav className="flex gap-6">
        <a
          className="hover:bg-yellow-500 hover:text-slate-200 rounded-md p-1 font-bold text-white"
          href="#"
        >
          Calculate
        </a>
        <a
          className="hover:bg-yellow-500 hover:text-slate-200 rounded-md p-1 font-bold text-white"
          href="#"
        >
          About
        </a>
        <a
          className="hover:bg-yellow-500 hover:text-slate-200 rounded-md p-1 font-bold text-white"
          href="#"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
