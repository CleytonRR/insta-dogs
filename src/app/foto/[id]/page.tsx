export default async function FotoById({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return <h1>Foto by {id}</h1>;
}
