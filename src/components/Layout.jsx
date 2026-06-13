import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-[#08172f] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08172f]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-sky-300/30 bg-sky-300/10 text-lg font-black text-sky-200">
              10
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-xs font-bold uppercase tracking-[0.32em] text-sky-300">
                Virtual Reality
              </span>
              <span className="block text-xs text-zinc-400">
                Cách mạng Tháng Mười Nga
              </span>
            </span>
          </NavLink>

          <nav className="flex items-center gap-2 text-sm font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-sky-200 ${
                  isActive ? "bg-white/10 text-sky-200" : "text-zinc-300"
                }`
              }
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/map"
              className={({ isActive }) =>
                `rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-sky-200 ${
                  isActive ? "bg-white/10 text-sky-200" : "text-zinc-300"
                }`
              }
            >
              Bản đồ
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="page-transition">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
