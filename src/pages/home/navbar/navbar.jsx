import "./navbar.css"
import { useState } from "react"

export default function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <li>
                Dark Mode
            </li>
            <li>
                Inverted
            </li>
            <li>
                Random
            </li>
            <li>
                Popup
            </li>
        </ul>
    </div>
  )
}
