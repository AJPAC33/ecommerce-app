import React from "react";

export function CheckingAuth() {
  function CircularProgress() {
    return (
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-[40px] min-h-[100vh]">
      <div className="flex flex-row justify-center">
        <CircularProgress color="warning" />
      </div>
    </div>
  );
}
