import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";

export const ErrMsg = ({ msg, err }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        <BsExclamationCircleFill className="mr-3 w-6 h-6" />
        {msg}
      </div>
      {err && (
        <>
          <div className="mt-4">{err}</div>
        </>
      )}
    </div>
  );
};

export const InfoMsg = ({ msg }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        <FaInfo className="mr-3 w-6 h-6" />
        {msg}
      </div>
      {err && (
        <>
          <div className="mt-4">{err}</div>
        </>
      )}
    </div>
  );
};

export const SuccessMsg = ({ msg }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        <c className="mr-3 w-6 h-6" />
        {msg}
      </div>
      {err && (
        <>
          <div className="mt-4">{err}</div>
        </>
      )}
    </div>
  );
};
