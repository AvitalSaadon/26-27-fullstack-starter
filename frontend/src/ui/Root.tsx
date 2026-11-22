import { Outlet } from 'react-router';

export function Root() {
  return (
    <div>
      Hello from Root
      <Outlet />
    </div>
  );
}
