import { FiltersContext } from '../context/filters.jsx'
import { useContext } from 'react'

export function useFilters () {
    /* const [filters, setFilters] = useState({
      category: 'laptops',
      minPrice: 0,
      maxPrice: 100000
    }) */
    const {filters, setFilters} = useContext(FiltersContext)
  
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice && 
          product.price <= filters.maxPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
  
    return { filters, filterProducts, setFilters }
  }