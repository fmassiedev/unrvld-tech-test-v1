export default function PageTitle({ title }: { title: string }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold text-slate-800 text-center my-12">{title}</h1>
    </div>
  );
}
