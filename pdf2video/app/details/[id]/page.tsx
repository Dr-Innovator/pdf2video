'use client'

import { useState } from 'react'
import { NavBar } from '@/components/nav-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FileText, Video, Share2, Trash2 } from 'lucide-react'
import Image from 'next/image';

const dummyFiles = {
  '1': { id: '1', type: 'pdf', name: 'Chemistry Notes', date: '2023-06-15', content: 'This is the content of the Chemistry Notes PDF.', previewUrl: '/placeholder.svg?height=160&width=320' },
  '2': { id: '2', type: 'video', name: 'Chemistry Video', date: '2023-06-16', content: 'https://example.com/chemistry-video', previewUrl: '/placeholder.svg?height=160&width=320' },
}

export default function DetailsPage({ params }: { params: { id: string } }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const file = dummyFiles[params.id as keyof typeof dummyFiles]

  if (!file) {
    return <div>File not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow p-6">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={file.previewUrl}
                  alt={`Preview of ${file.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                {file.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <h1 className="text-2xl font-bold">{file.name}</h1>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{file.date}</p>
            {file.type === 'pdf' ? (
              <div className="bg-muted p-4 rounded-md">
                <p>{file.content}</p>
              </div>
            ) : (
              <div className="aspect-video bg-muted flex items-center justify-center rounded-md mb-4">
                <Button onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
              </div>
            )}
            <div className="flex justify-between mt-4">
              <Button variant="outline" className="flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="destructive" className="flex items-center">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

