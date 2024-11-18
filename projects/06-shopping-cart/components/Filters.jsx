import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import { useId } from 'react'

// eslint-disable-next-line react/prop-types
export function Filters () {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const maxPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeMaxPrice = (event) => {
        setFilters(prevState => ({
            ... prevState,
            maxPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Min price: </label>
                <input 
                    type='textfield'
                    id={minPriceFilterId}
                    min='0'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
            </div>
            <div>
                <label htmlFor={maxPriceFilterId}>Max price: </label>
                <input 
                    type='textfield'
                    id={maxPriceFilterId}
                    max='100000' 
                    onChange={handleChangeMaxPrice}
                    value={filters.maxPrice}
                />
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category: </label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='home-decoration'>Home</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                    <option value='fragrances'>Fragrances</option>
                    <option value='skincare'>Skincare</option>
                    <option value='groceries'>Groceries</option>
                </select>
            </div>
        </section>
    )
}