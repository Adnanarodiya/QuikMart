interface Props {
  img: string;
  discrption: string;
  tittle: string;
}

export default function asdf({ img, discrption, tittle }: Props) {
  return (
    <div className="card rounded-md  bg-white w-72 hover:shadow-xl border  ">
      <figure className="py-3 hover:scale-105 w-11/12 mx-auto h-64 text-center">
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body p-3 items-center text-center text-black text-sm">
        <p>{discrption}</p>
        <h2 className="card-title text-black"> {tittle} </h2>
      </div>
    </div>
  );
}
