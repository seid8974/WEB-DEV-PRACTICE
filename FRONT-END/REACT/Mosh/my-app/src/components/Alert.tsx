import React from "react";

interface Props {
  children: string;
  onClose: () => void
}

const Alert = ({ children,onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible" role="alert">
       {children}
        <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      {/* <div className="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      <div className="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div> */}
    </>
  );
};

export default Alert;
