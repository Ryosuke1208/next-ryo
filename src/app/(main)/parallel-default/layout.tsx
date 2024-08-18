export default function ParallelLayout({
  first,
  second,
}: {
  first: React.ReactNode;
  second: React.ReactNode;
}) {
  return (
    // 二つのページを一つにまとめて表示できる
    // https://nextjs.org/docs/app/building-your-application/routing/parallel-routes

    <div>
      <h1>Parallel</h1>
      <div>{first}</div>
      <div>{second}</div>
    </div>
  );
}
