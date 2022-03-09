import { useState } from 'react';

const ItemCount=({init,stock})=> {

    const [count, setCount,] = useState(init);

    const suma = () => {
    if (count<stock){
    setCount(count + 1)
    }
};

    const resta = () => {
    if(count>init){
    setCount(count -1)
    }
};

    const addCarrito = () => {
        setCount (init)
        console.log(`Agrego al carrito ${count} unidades`)
    }

    return (
    <div className='botones'>
        <label>{count}</label>
        <p>Pantalones</p>
        <img src="https://static1.shopoon.fr/catalog/products/6/70/28/67/6/@/7028676-pantalon-timberland-homme-bleu-petrole-32w-32l-180x180-1.jpg" alt="" />
        <button onClick={addCarrito}> Agregue su pantalon</button>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
    </div>
    );
}

export default ItemCount