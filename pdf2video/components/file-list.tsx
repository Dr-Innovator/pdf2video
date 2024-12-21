import { FileCard } from './file-card'

interface File {
  id: string
  type: 'pdf' | 'video'
  name: string
  date: string
}

interface FileListProps {
  files: File[]
}

export function FileList({ files }: FileListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {files.map((file) => (
        <FileCard key={file.id} {...file} />
      ))}
    </div>
  )
}

