import React from "react";

export function AuthLayout({ children, title = "" }) {
  return (
    <div className="flex flex-col items-center min-h-[200vh] bg-linear-to-r from-blue-300 to-cyan-300 p-4">
      <div className="mt-[200px] w-[500px] bg-linear-to-r from-sky-500 to-blue-300 p-[80px] border rounded-sm">
        <h4 className="mb-1"></h4>
        {children}
      </div>
    </div>
  );
}
