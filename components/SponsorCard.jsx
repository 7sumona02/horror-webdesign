"use client"

import React from "react"
import LogoCarousel from "./ui/logo-carousel"

export function Sponsorcard() {
  return (
    <div className="py-24">
      <div className="w-screen flex items-center justify-center">
        {/* <div className="text-center">
            The best are already here
          <a href="https://www.newcult.co" target="_blank">
            Join new cult
          </a>
        </div> */}

        <LogoCarousel columnCount={6} />
      </div>
    </div>
  )
}
