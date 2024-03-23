"use client";
import ScrollSpy from "react-ui-scrollspy";
import React from "react";

const ScrollSpyWrapper = ({ children }: { children: React.ReactNode }) => (
  <ScrollSpy offsetBottom={50} scrollThrottle={30} offsetTop={10}>
    {children}
  </ScrollSpy>
);

export default ScrollSpyWrapper;
