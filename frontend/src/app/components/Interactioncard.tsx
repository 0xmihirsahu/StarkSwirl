import React from "react";

export default function Interactioncard() {
  // Two children lists, first child list with content cut after and last child with content cut before
  return (
    <div className="tabs flex flex-col ">
      <nav className="min-h-14">
        <ul className="flex items-center justify-between flex-grow-1 flex-shrink-0">
          <li className="m-0 p-0">
            <a
              className="flex justify-center items-center relative mr-7 m-0 pr-7 border border-red-600 border-solid cursor-pointer hover:bg-pink-700"
              style={{ fontSize: "1.35rem" }}
            >
              <span>Deposit</span>
            </a>
          </li>
          <li className="m-0 p-0 ">
            <a
              className="flex justify-center items-center relative ml-7 m-0 pr-7 border border-red-600 border-solid cursor-pointer hover:bg-pink-700"
              style={{ fontSize: "1.35rem" }}
            >
              <span>Withdraw</span>
            </a>
          </li>
        </ul>
      </nav>
      <section
        className="flex flex-col bg-dark h-full border border-red-600 border-solid"
        style={{ padding: "1.5rem 1.5rem 2rem" }}
      >
        <div></div>
      </section>
    </div>
  );
}
