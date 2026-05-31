import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-red-950/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-red-900 text-lg font-black text-amber-300 shadow-sm">
              10
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-sm font-bold uppercase tracking-widest text-red-900">
                Bảo tàng số
              </span>
              <span className="block text-xs text-zinc-500">
                Cách mạng Tháng Mười Nga
              </span>
            </span>
          </NavLink>

          <nav className="flex items-center gap-2 text-sm font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-md px-3 py-2 transition hover:bg-red-50 hover:text-red-900 ${
                  isActive ? 'bg-red-900 text-white' : 'text-zinc-700'
                }`
              }
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/map"
              className={({ isActive }) =>
                `rounded-md px-3 py-2 transition hover:bg-red-50 hover:text-red-900 ${
                  isActive ? 'bg-red-900 text-white' : 'text-zinc-700'
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
  )
}

export default Layout
