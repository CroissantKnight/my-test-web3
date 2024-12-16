// Layout.js
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header className="layout-container">
        <h1>My App</h1>
        {/* เมนู หรือ Navigation ที่ต้องการ */}
      </header>

      <main>
        {/* ส่วนนี้จะแสดงผล Route ที่ถูกเลือก เช่น T_user, T_admin, หรือ Home */}
        <Outlet />
      </main>

      <footer>
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
}

export default Layout;
