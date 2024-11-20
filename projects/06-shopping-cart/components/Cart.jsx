/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

function CartItem ({ img, price, title, quantity, addToCart }) {
    return (
        <li>
            <img
                src={img}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - {price}
            </div>                          
            <footer>
                <small>
                    Stock: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />
            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem 
                            key={product.id} 
                            addToCart={() => addToCart(product)}
                            { ... product} 
                        />
                    ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}