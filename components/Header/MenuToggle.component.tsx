export default function MenuToggle() {
  return (
    <button className="z-50 md:hidden relative">
      <span className="sr-only">Toggle Menu</span>
      <div className="h-5 flex flex-col items-end justify-between">
        <span className="block h-0.5 w-8 bg-foreground rounded-full"></span>
        <span className="block h-0.5 w-6 bg-foreground rounded-full"></span>
        <span className="block h-0.5 w-8 bg-foreground rounded-full"></span>
      </div>
    </button>
  );
}
