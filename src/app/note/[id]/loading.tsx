export default function NoteSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden w-full h-full p-4 gap-4">
      <div className="flex justify-between items-center">
        <div className="h-8 bg-gray-100 rounded-xl w-1/2"></div>
        <div className="h-8 bg-gray-100 rounded-xl w-[100px]"></div>
      </div>
      <h1 className="h-8 bg-gray-100 rounded-xl"></h1>
      <ul className="space-y-2 flex-1 overflow-y-auto">
        <li className="h-8 bg-gray-100 rounded"></li>
        <li className="h-8 bg-gray-100 rounded"></li>
        <li className="h-8 bg-gray-100 rounded"></li>
        <li className="h-8 bg-gray-100 rounded"></li>
      </ul>
    </div>
  );
}
