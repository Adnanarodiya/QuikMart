import { Link } from "react-router-dom";

interface Props {
  img: string;
  title: string;
  link: string;
  mrp: number;
}

export default function asdf({ link, img, mrp, title }: Props) {
  return (
    <>
      <Link to={link}>
        <div className="w-72  p-4 ">
          <div className=" hover:opacity-80  hover:duration-500 mb-3">
            <img className="mx-auto h-60 object-contain" src={img} alt="" />
          </div>
          <div className="mb-4 text-center">
            <h3 className="mb-3  truncate font-bold text-sm">{title}</h3>
            <p className="mb-4 italic">₹ {mrp}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
