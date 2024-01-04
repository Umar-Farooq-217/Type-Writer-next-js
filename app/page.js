import Image from 'next/image'
import Typewriter from './components/typeWriter/TypeWriter';
export default function Home() {
  const textArray = ['Text 1', 'Text 2', 'Text 3']; // Add your text here

  return (
   <div>
   
   <Typewriter textArray={textArray} />
   </div>
  )
}
