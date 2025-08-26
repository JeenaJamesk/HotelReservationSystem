"use client";
import React from "react";

interface ToasterProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

const Toaster: React.FC<ToasterProps> = ({ message, type = "success", onClose }) => {
  return (
    <div
      className={`fixed top-6 right-0 z-50 px-6 py-4 rounded shadow-lg text-white transition-all duration-300 flex
        ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
      style={{ right: 0, display: 'flex', backgroundColor: type === "success" ? "#48bb78" : "#f56565" }}
      role="alert"
    >
      <div className="flex items-center justify-between gap-4">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-[10px] border-0 text-white hover:text-gray-200 text-xl font-bold focus:outline-none bg-transparent"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toaster;
