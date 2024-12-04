import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24 flex justify-between">
      <Link href="/" className="flex items-center gap-3">
        <div className="text-2xl tracking-wide">LOGO</div>
      </Link>
      <p>&copy; Copyright</p>
    </footer>
  );
};

export default Footer;
