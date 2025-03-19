export default async function UserById({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;

  return <h1>User by {user}</h1>;
}
