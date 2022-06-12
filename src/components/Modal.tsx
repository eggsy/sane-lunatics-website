import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MODAL_ID = "instagram-campaign";

export const Modal: React.FC<{
  title?: string;
  icon?: React.FC;
  children: React.ReactNode;
}> = (props) => {
  const [showModal, setModal] = useState(false);

  // Functions
  const getModals = () => {
    if (!localStorage) return;

    const modals = localStorage.getItem("modals");
    const parsedModals: string[] = modals ? JSON.parse(modals) : [];

    return parsedModals;
  };

  const closeModal = (clickCloseButton: boolean = false) => {
    const modals = getModals();

    if (clickCloseButton === true)
      localStorage.setItem("modals", JSON.stringify([...modals, MODAL_ID]));

    setModal(false);
  };

  // Lifecycle
  useEffect(() => {
    const modals = getModals();
    if (!modals.includes(MODAL_ID)) setModal(true);
  }, [setModal]);

  if (!showModal) return null;
  return (
    <div
      onClick={() => closeModal()}
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
          onClick={() => closeModal(true)}
          className="px-4 py-2 text-sm uppercase transition-colors bg-black/5 rounded-xl hover:bg-black/10"
        >
          Kapat
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
