export default async function Page() {
  // const res = await fetch('http://localhost:4200/api/posts?key=12');
  const res = await fetch('http://localhost:4200/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      date: new Date(),
    })
  });
  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
}