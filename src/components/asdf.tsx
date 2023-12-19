// interface Props {
//   name: string;
//   imgs: string;
//   price: number;
//   description: string;
// }
// export default function Asdf({ name, imgs, price, description }: Props) {
//   return (
//     <div>
//       <div className="card w-96 bg-base-100 shadow-xl">
//         <figure>
//           <img src={imgs} alt="Shoes" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">{name}</h2>
//           <p>{description}</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-primary">{price}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
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
