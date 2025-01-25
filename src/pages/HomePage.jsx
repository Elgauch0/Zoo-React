import { useEffect } from "react";




export default function HomePage() {
  useEffect(() => {
    localStorage.clear();
    console.log('localStorage cleared');
  }, []);



  
  return (
    <>
    <h1>HomePage</h1>
    </>
  )
}

