/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
//API CHANGED, THERE ARE NO MORE IMAGES.

export function Products ({ products }) {
    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img
                            src={product.img}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}