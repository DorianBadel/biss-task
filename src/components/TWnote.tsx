import React from "react";
function TWnote({
  callback,
}: {
  callback: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return <></>;
}

function TWContainer(children?: React.ReactNode) {
  return (
    <div className="bg-zinc-200 bg-opacity-80 fixed inset-0 z-50   ">
      <div className="flex pt-20 px-20 justify-center items-center">
        <div className="flex-col min-w-full justify-center bg-white py-10 px-12 rounded-md ">
          {children}
        </div>
      </div>
    </div>
  );
}

export { TWContainer, TWnote };
