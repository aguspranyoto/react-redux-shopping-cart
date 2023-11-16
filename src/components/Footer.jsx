import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-screen-xl text-center mx-auto p-4">
        <span className="text-sm text-gray-200 text-center">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            Agus Pranyoto
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
