import { Button } from "@/components/ui/button"
import { LogInIcon, ShoppingCart } from "lucide-react"
import Link from "next/link"

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Cowboy.uz</h1>
        <div className="flex gap-5">
          <Link href="/">Bosh sahifa</Link>
          <Link href="/about">Biz haqimizda</Link>
          <Link href="/contact">Aloqa</Link>
        </div>
        <div className="flex gap-3">
          <Link href="/login"><Button variant="outline"> <LogInIcon/> Admin</Button></Link>
          <Button variant="outline"> <ShoppingCart/> Cart (0)</Button>
        </div>
      </div>
    </div>
  )
}

export default Header