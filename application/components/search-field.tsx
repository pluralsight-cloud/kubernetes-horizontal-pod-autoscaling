type SearchFieldProps = {
  id: string;
  className?: string;
};

export function SearchField({ id, className = "" }: SearchFieldProps) {
  return (
    <form role="search" className={`relative ${className}`}>
      <label htmlFor={id} className="sr-only">
        Search
      </label>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-mint"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        id={id}
        type="search"
        placeholder="Search"
        className="h-10 w-full rounded-full border border-mint/70 bg-transparent pr-4 pl-9 text-sm text-mint placeholder:text-mint/70 focus:border-white focus:outline-none"
      />
    </form>
  );
}
