export default async function Menu() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <div> Menu </div>
  );
}