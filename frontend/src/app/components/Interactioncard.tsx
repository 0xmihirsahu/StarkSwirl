"use client"

import React, { useState } from "react"
import Tokenselect from "./ui_implementations/tokenselect"

export default function Interactioncard() {
  const [tabIndex, setTabIndex] = useState<number>(1)

  return (
    <div className="tabs flex flex-col">
      <nav className="min-h-14 mb-4">
        <ul className="flex items-center justify-start">
          <li className="mr-4">
            <a
              onClick={() => setTabIndex(1)}
              className={`tab-item ${tabIndex === 1 ? "active" : "hover:bg-pink-700"}`}
              style={{ fontSize: "1.35rem" }}
            >
              <span>Deposit</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => setTabIndex(2)}
              className={`tab-item ${tabIndex === 2 ? "active" : "hover:bg-pink-700"}`}
              style={{ fontSize: "1.35rem" }}
            >
              <span>Withdraw</span>
            </a>
          </li>
        </ul>
      </nav>
      <section className="flex flex-col bg-dark h-full border border-red-600 p-6">
        <div className={tabIndex === 1 ? "content active-content" : "content"}>
          <Tokenselect />
        </div>
        <div className={tabIndex === 2 ? "content active-content" : "content"}>
          tab2
        </div>
      </section>
    </div>
  )
}
