export default function QuizPreview({ title, desc, category }) {
  return (
    <div className="card mb-10 cursor-pointer grid grid-cols-4">
      <div className="col-span-3">
        <div className="font-bold">{title}</div>
        <div className="mt-3">{desc}</div>
      </div>
      <div className="col-span-1 text-center my-auto font-semibold gradient-text-purple text-xl">
        {category}
      </div>
    </div>
  );
}
