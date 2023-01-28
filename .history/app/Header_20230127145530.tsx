import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <div>
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" >
         <h1> Algo News</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header