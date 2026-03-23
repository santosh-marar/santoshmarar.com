"use client"
import { VideoIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'

function Test() {
  return (
    <div>
        <button className="mb-[22px] p-[6px] bg-[#F9F9F9] rounded-[16px] border border-[#E8E8E8] shadow-[0px_4px_8px_rgba(0,0,0,0.04),inset_0px_2px_4px_rgba(255,255,255,0.8),inset_0px_-2px_4px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0px_6px_12px_rgba(0,0,0,0.06),inset_0px_2px_4px_rgba(255,255,255,1),inset_0px_-2px_4px_rgba(0,0,0,0.03)] active:translate-y-[1px] active:shadow-none cursor-pointer group"><div className="w-[64px] h-[64px] rounded-[11px] border border-[#E8E8E8] shadow-[0_39.724px_11.034px_0_rgba(0,0,0,0),_0_25.379px_9.931px_0_rgba(0,0,0,0.01),_0_14.345px_8.828px_0_rgba(0,0,0,0.04),_0_6.621px_6.621px_0_rgba(0,0,0,0.07),_0_1.103px_3.31px_0_rgba(0,0,0,0.08),inset_0px_2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center relative overflow-hidden bg-white transition-all duration-200 group-active:shadow-none group-active:bg-[#F5F5F5]"><div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(-45deg,#000,#000_1px,transparent_1px,transparent_6px)]"></div>
        {/* <Image src="/quality.svg?v=2" alt="Quality" className="w-[36px] h-[36px] object-contain relative z-10 transition-transform duration-200 group-active:scale-95"> */}
        <VideoIcon/>
        </div></button>
    </div>
  )
}

export default Test