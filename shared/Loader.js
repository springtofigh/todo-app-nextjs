import Image from 'next/image'
import Infinity from "../public/Infinity.gif"

const Loader = () => {
  return (
    <div className="text-slate-100 flex justify-center">
        <Image src={Infinity} alt='Loading...'/>
    </div>
  )
}

export default Loader