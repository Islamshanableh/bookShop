import React, { useState ,useEffect} from "react";
import axios from "axios";

export const ShoppingCart = ()=>{
    const [book,setBook]=useState()

    useEffect(() => {
        axios.get("http://localhost:5000/cart/").then((res) => {
          setBook(res.data.message);
        });
      }, [book]);


    return (<div>

 {!book?(<div>
    Shopping cart is Empty
 </div>)
:(<div>
    
</div>)
}
    </div>)
}

