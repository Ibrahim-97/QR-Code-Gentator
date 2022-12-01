import { FaBarcode } from 'react-icons/fa'
import { MdQrCode2 } from 'react-icons/md'
import Link from "next/link"
function Navbar() {
  return (
    <div className="flex justify-center text-white print:hidden text-lg font-bold mb-1">
          <ul className="flex print:hidden">
            <li className="mr-2 print:hidden bg-indigo-900 py-1 px-2 rounded-full flex items-center"><MdQrCode2 className='inline-block mr-1' /> <Link href="/qrcode">Qr-Code</Link></li>
            <li className="ml-2 print:hidden bg-indigo-900 py-1 px-2 rounded-full flex items-center"><FaBarcode className='inline-block mr-1' /><Link href="/barcode">Bar-Code</Link></li>
          </ul>
    </div>
  )
}

export default Navbar