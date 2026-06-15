import Counter from "@/components/Counter";
// template 是嵌套在layout当中的
// 每次访问都会创建新的实例，不保留状态
// 底层：会通过改变组件的key来强制重新创建组件实例
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-1/2 w-1/2 flex-col m-4 p-2 bg-yellow-500 rounded">
      {/* 状态不会保留 */}
      这是Template组件
      <Counter />
      {children}
    </div>
  );
}
