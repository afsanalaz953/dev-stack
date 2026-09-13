import { use, useState } from "react";
import type { IProducts } from "../types";
import { FaRegStar } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";

interface IProductsProps {
  usersPromise: Promise<IProducts[]>;
}

const Body = ({ usersPromise }: IProductsProps) => {
  console.log(usersPromise, "typePromise");

  // for button functinality
  const [stack, setStack] = useState<IProducts[]>([])

  const data = use(usersPromise);
  console.log(data, "usersData");

  const handleAddToStack = (newProduct: IProducts) =>{
  console.log(newProduct, "button clicked product")
  // setStack([...stack, newProduct])
  setStack((prev) => [...prev, newProduct])
  }

  const handelDelete = (item: IProducts) =>{

  }

  return (
    <div className="container mx-auto">
      <h2 className="text-5xl font-bold">Explore the Technologies</h2>
      <p className="mt-4">
        Pick one technology per category to build your ideal stack.
      </p>
   
<div className="grid grid-cols-12 gap-2 p-6 sm:gap-6 sm:py-4">
    {/* Left side: all cards grid */}
    <div className="allcards grid grid-cols-3 col-span-9 gap-2 space-y-10 p-10 ">
      {data.map((newProduct) => (
        <div key={newProduct.name} className="border-2 shadow p-4 space-y-4 rounded ">
          <div className="1st flex gap-8 justify-between">
 <img
            className="mx-auto w-10 block h-10 rounded-full sm:mx-0 sm:shrink-0"
            src={newProduct.icon}
            alt=""
          />
       
          <button className="bg-purple-200 hover:bg-purple-500  rounded-2xl w-20 p-2">{newProduct.badge}</button>
          </div>
         
          <div className="space-y-2 text-center sm:text-left">
            <div>{newProduct.name}  </div>
             <p className="text-lg font-semibold text-black"> {newProduct.description} </p>
            <div className="flex gap-4 my-4">
             <span> {newProduct.category}  </span>
             <span> {newProduct.difficulty}  </span>
             <div className="flex gap-2">
 <span> 
              <FaRegStar className="bg-yellow-500" /> </span>
              <span> {newProduct.rating}  </span>
             

             </div>
            
            </div>
            <button onClick={() =>handleAddToStack(newProduct)}   className="border-purple-200 p-2 hover: bg-black rounded-2xl w-50 mx-auto bg-purple-500 text-white hover:border-transparent hover:bg-orange-600 hover:text-white active:bg-purple-700">
              Add to Stack
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Right side: single card */}
    <div className="singlecard col-span-3 ">
      <div className="border-2 shadow rounded p-8 space-10 m-8">
<h2 className="font-bold text-start text-lg">Your Stack</h2>
<p> Selected Stack {stack.length} </p>
      <div className="space-y-2 text-center sm:text-left">
       {stack.length === 0 ?
       
       (
        <p className="text-sm text-start font-semibold text-slate-400">Stack is empty</p>
         
       ) : (
        stack.map((item)=>(
          <div key={item.name}>

{/* <div className=""> */}
 
  <div className="flex flex-col gap-4 h-16 w-40 p-4 border-0 shadow mt-4">
    <div className="flex gap-4 ">
   <span> <img
            className="mx-auto w-10 block h-10 rounded-full sm:mx-0 sm:shrink-0"
            src={item.icon}
            alt=""
          />
          </span>
    <div className="flex flex-col">
  <span className="text-sm font-semibold">{item.name}</span>
        <span className="text-xs text-slate-500">{item.category}</span>
    </div>
    <div>
      <button  onClick={() =>handleDelete(item)}   <LuDelete />  </button>
    
    </div>


    </div>
 
      
      </div>
       

          </div>
        )
      )
       )
  
      }
          
       
        

        </div>
        
      </div>


      </div>
      
    </div>
  </div>
  //  </div>
  );
};

export default Body;






// import { use } from "react";
// import type { IProducts } from "../types";

// interface IProductsProps {
// usersPromise: Promise<IProducts []>;
// }

// const Body = ({usersPromise}: IProductsProps) => {
//     console.log(usersPromise, "typePromise")
// const data = use (usersPromise)
// console.log(data,  'usersData')
//     return (
//         <div className="container mx-auto">
//             <h2 className="text-5xl font-bold">Explore the Technologies</h2>
//             <p className="mt-4 ">Pick one technology per category to build your ideal stack.</p>
//             <div>
//               {data.map((newProducts) => {
// console.log(newProduct, "TypeProducts");

// return
            
//             <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
//   <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
//   <div className="space-y-2 text-center sm:text-left">
//     <div className="space-y-0.5">
//       <p className="text-lg font-semibold text-black">Erin Lindford</p>
//       <p className="font-medium text-gray-500">Product Engineer</p>
//     </div>
//     <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
//       Message
//     </button>
//   </div>
// </div>
//               }
// })
// </div>
//         </div>
//     );
// };

// export default Body;
