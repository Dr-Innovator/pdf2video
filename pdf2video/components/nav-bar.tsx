import Link from 'next/link'
import { Home, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-secondary text-secondary-foreground">
      <Link href="/" className="flex items-center space-x-2">
        <Home className="h-6 w-6" />
        <span className="font-bold text-lg">PDF2Video</span>
      </Link>
      <Button variant="ghost" className="flex items-center space-x-2">
        <Upload className="h-5 w-5" />
        <span>Upload PDF</span>
      </Button>
    </nav>
  )
}

