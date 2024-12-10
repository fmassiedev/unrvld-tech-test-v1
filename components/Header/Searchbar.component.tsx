import IconSearch from "../Icons/search.icon";

// TODO: To finish off and make work
export default function SearchBar() {
  return (
    <form className="flex items-center justify-between gap-4 bg-slate-100 px-4 py-2 rounded-md flex-1">
      <input
        type="text"
        name="search"
        placeholder="What are you looking for?"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer" type="submit">
        <IconSearch />
      </button>
    </form>
  );
}
