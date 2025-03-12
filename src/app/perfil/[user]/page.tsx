export default function UserById({ params }: { params: { user: string } }) {
  return <h1>User by {params.user}</h1>;
}
