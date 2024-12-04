import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm mt-24">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-2xl tracking-wide">LOGO</div>
        </Link>
        <p>&copy; Copyright</p>
      </div>
    </footer>
  );
};

export default Footer;
