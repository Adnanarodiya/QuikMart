import { Link } from "react-router-dom";

interface Props {
  img: string;
  title: string;
  link: string;
  mrp: number;
}

export default function ProductCard({ link, img, mrp, title }: Props) {
  const formatter = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  });
  return (
    <>
      <Link to={link}>
        <div className="w-40  md:w-56 xl:w-72 p-4 ">
          <div className=" hover:opacity-80  hover:duration-500 mb-3 duration-700">
            <img
              className="mx-auto  h-44 md:h-56 xl:h-60 object-contain"
              src={img}
              alt=""
            />
          </div>
          <div className="mb-4 text-center">
            <h3 className="mb-3  truncate font-bold text-sm">{title}</h3>
            <p className="mb-4 italic">₹ {formatter.format(mrp)}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
