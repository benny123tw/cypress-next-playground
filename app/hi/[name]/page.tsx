export default function HelloWorld({ params }: { params: { name: string } }) {
  return <div>Hello {params.name}</div>
}
