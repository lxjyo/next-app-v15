
// 以@开头的文件夹会被当成并行路由
export default async function Card() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div> Card </div>
  );
}