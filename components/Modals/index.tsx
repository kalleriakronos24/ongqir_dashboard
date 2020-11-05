import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  id: string;
  headerName: string;
};

const Modal = ({ children, id, headerName }: Props) => {
  return (
    <div
      className="modal modal-search fade"
      id={id}
      tabIndex={-1}
      role="dialog"
      aria-labelledby={id}
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-header-name">{headerName}</span>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="tim-icons icon-simple-remove"></i>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
