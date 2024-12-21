import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Share2, Trash2 } from 'lucide-react'
import Link from 'next/link'

interface FileCardProps {
  id: string
  type: 'pdf' | 'video'
  name: string
  date: string
  previewUrl: string
}

export function FileCard({ id, type, name, date, previewUrl }: FileCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden">
      <CardContent className="p-0">
        <div className="relative w-full h-40">
          <Image
            src={previewUrl}
            alt={`Preview of ${name}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
          {type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 truncate">{name}</h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
        <Link href={`/details/${id}`}>
          <Button variant="secondary">View</Button>
        </Link>
        <Button variant="outline" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

