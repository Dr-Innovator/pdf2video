import { NavBar } from '@/components/nav-bar'
import { FileList } from '@/components/file-list'

const dummyFiles = [
  { id: '1', type: 'pdf', name: 'Chemistry Notes', date: '2023-06-15', previewUrl: '/placeholder.svg?height=160&width=320' },
  { id: '2', type: 'video', name: 'Chemistry Video', date: '2023-06-16', previewUrl: '/placeholder.svg?height=160&width=320' },
  { id: '3', type: 'pdf', name: 'Physics Notes', date: '2023-06-17', previewUrl: '/placeholder.svg?height=160&width=320' },
  { id: '4', type: 'video', name: 'Physics Video', date: '2023-06-18', previewUrl: '/placeholder.svg?height=160&width=320' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Files</h1>
        <FileList files={dummyFiles} />
      </main>
    </div>
  )
}

