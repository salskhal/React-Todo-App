export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-[972px] flex justify-between items-center text-[11px] opacity-30 mt-[12px]">
      <small className="text-[11px]">
        &copy; {currentYear}. Copyright by Salskhal.
      </small>
      <p>
        Version <b>1.5</b>
      </p>
    </footer>
  );
}
