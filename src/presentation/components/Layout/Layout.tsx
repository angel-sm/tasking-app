import { ReactNode } from "react";
import Task from "@assets/icons/Task.icon";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <div className="w-full mx-auto md:w-4/5 lg:w-4/5 lg:my-5">
    <header>
      <div className="mx-auto p-5 border-b-2 my-5">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left flex items-center content-center">
            <Task />
            <h1 className="text-3xl font-bold text-gray-900 ml-2">Tasks</h1>
          </div>
        </div>
      </div>
    </header>
    <>{children}</>
  </div>
);

export default Layout;
