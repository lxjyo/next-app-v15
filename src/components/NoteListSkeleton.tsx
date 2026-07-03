
export default function NoteListSkeleton() {
  return (
    <div>
      <ul className="space-y-2 flex-1 overflow-y-auto">
        <li className="h-16 bg-gray-200 rounded"></li>
        <li className="h-16 bg-gray-200 rounded"></li>
        <li className="h-16 bg-gray-200 rounded"></li>
        <li className="h-16 bg-gray-200 rounded"></li>
      </ul>
    </div>
  )
}