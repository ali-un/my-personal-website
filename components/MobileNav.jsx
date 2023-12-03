"use client";
import { useState } from "react";

const MobileNav = () => {
  const [show, set_show] = useState(false);
  return (
    <>
      <section className="md:hidden" onClick={() => set_show(!show)}>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 16 16"
            fill="#fff"
          >
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
      </section>
    </>
  );
};

export default MobileNav;
