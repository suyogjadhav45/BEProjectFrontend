import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();
  
  return (
    <div className="z-10 uppercase fixed w-full text-white bg-blue-1 flex px-14 py-4 justify-between items-center">
      <h1 className="text-2xl font-bold"> Ahirani To Marathi Translation</h1>
    </div>
  );
}
