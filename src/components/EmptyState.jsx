function EmptyState({ title, message }) {
  return (
    <div className="rounded-sm border border-dashed border-[#b8ae9b] bg-ivory/80 p-10 text-center">
      <h3 className="font-serif text-2xl text-ink">{title}</h3>
      <p className="mt-2 text-sm text-[#5e584d]">{message}</p>
    </div>
  );
}

export default EmptyState;
