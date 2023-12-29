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
          <div className=" hover:opacity-80  hover:duration-500 ">
            <img className="mx-auto h-60 object-contain" src={img} alt="" />
          </div>
          <div className="mb-4 text-center">
            <h3 className="mb-4 text-2xl font-bold">{title}</h3>
            <p className="mb-4 text-xl font-semibold italic">{mrp}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
