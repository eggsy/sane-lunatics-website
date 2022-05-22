import React from "react";
import { motion } from "framer-motion";

export const Modal: React.FC<{
  title?: string;
  icon?: React.FC;
  show: boolean;
  onClose: (clickCloseButton?: boolean) => void;
  children: React.ReactNode;
}> = (props) => {
  if (!props.show) return null;
  return (
    <div
      onClick={() => props.onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center text-black bg-black/50 font-inter"
    >
      <motion.div
        initial={{
          scale: 0.5,
        }}
        animate={{
          scale: 1,
        }}
        className="flex flex-col w-full p-6 mx-4 space-y-4 bg-white shadow-sm lg:mx-0 rounded-xl lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center gap-2">
          {props.icon && <props.icon />}
          {props.title && (
            <h3 className="text-xl font-semibold">{props.title}</h3>
          )}
        </div>

        <p>{props.children}</p>

        <button
          type="button"
          onClick={() => props.onClose(true)}
          className="px-4 py-2 text-sm uppercase transition-colors bg-black/5 rounded-xl hover:bg-black/10"
        >
          Kapat
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
