"use cache";

async function getExampleData() {
  "use cache"
  const no = Math.random();
  return no;
}

export default async function Home() {
  const randomNo = await getExampleData();

  return (
    <div>
       {randomNo}
    </div>
  );
}
