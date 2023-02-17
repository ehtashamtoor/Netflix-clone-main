import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react'

// Using react-icons
import { HiSearch } from 'react-icons/hi'
import { HiBell } from 'react-icons/hi'
const Header = () => {

    // state to check scroll y
    const [isScrolled, setisScrolled] = useState(false);

    useEffect(() => {
        // handleScroll to check if scrolled
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setisScrolled(true);
            } else {
                setisScrolled(false);
            }
        }
        if (window.scrollY > 0) {
            window.addEventListener('scroll', handleScroll)
        }else{
            window.addEventListener('scroll', handleScroll)
        }

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && 'bg-black'} z-50 text-sm`}>
            <div className="flex space-x-5 md:space-x-12 p-0 items-center">
                <Image src="https://rb.gy/ulxxee" width={80} height={90} className="cursor-pointer object-contain" alt="Netflix logo" />

                <div className="md:hidden">
                    Browse
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New and Popular</li>
                    <li className="headerLink">My List</li>
                </ul>

            </div>
            <div className="flex items-center space-x-3">
                <HiSearch className="hidden h-5 w-5 sm:inline" />
                <p className="hidden md:inline text-sm">Kids</p>
                <HiBell className="h-5 w-5" />
                <Link href={"/account"}>
                    <Image src={"https://rb.gy/g1pwyx"} width={20} height={20} alt={"screens"} />
                </Link>
            </div>
        </header>
    )
}

export default Header