"use client";
import { useSession } from "next-auth/react";

export default function Page1() {
  const { data: session, update } = useSession();

  const handleUpdate=()=>{
    if(session?.user && update){
      update({...session.user, name: "Shivshakti"})
    }
  }
  return (
    <>
      <button
        onClick={handleUpdate}>
        Update session
      </button>
      <h1>Can be accessed by any user.</h1>
    </>
  );
}
