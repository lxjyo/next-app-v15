
/**
 * [...param] 路由参数 example: /movie/1/2/3 => param: ['1', '2', '3'] 
 * [[...param]] 可选路由参数 example: /movie => param: []  /movie/1/2/3 => param: ['1', '2', '3']
 */
export default async function Page({ params }: { params: Promise<{ param: string[] }> }) {
  const { param } = await params;
  return (
    <h1 className="text-4xl font-bold text-gray-800">
      Hello, Movie {JSON.stringify(param)}
    </h1>
  )
}