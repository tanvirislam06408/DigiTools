

const Card = ({ model,cart,setCart }) => {


    const productAddToCart=(p)=>{
         
            const alreadyExistCards=cart.find(exist=> exist.id === id);
            if(alreadyExistCards){
                return;
            }

        setCart([...cart,p])
    }

    const {
        id,
        name,
        description,
        price,
        period,
        tag,
        tagType,
        features,
        icon
    } = model;

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="flex justify-between">
                        <span className="text-xl">{icon}</span>
                        {
                            tagType === "popular" ? <span className="badge bg-[#E1E7FF]">{tagType}</span> : <span className="badge  bg-[#FEF3C6]">{tagType}</span>
                        }
                    </div>
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <p className="text-[#627382] text-[16px]">{description}</p>
                    <p className="font-bold text-4xl">${price} <span className="text-[16px] font-normal text-[#627382]">/{period}</span></p>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            features.map((fe,i) => {
                                return <li key={i}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{fe}</span>
                                </li>
                            })
                        }
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white " onClick={()=>{productAddToCart(model)}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;