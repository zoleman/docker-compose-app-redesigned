import CategoryFilter from '@/components/categoryPage/CategoryFilter';
import CategorySection from '@/components/categoryPage/CategorySection'
import SideFilterSection from '@/components/categoryPage/SideFilterSection'
import { useFetch } from '@/helpers/useFetch';


import React, { useEffect, useState } from 'react';


function Category() {

  const {
    data: data,
    loading: dataLoading,
    error: dataError
  } = useFetch('/data/data.json')

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError
  } = useFetch('/api/categories')

  useEffect(() => {
    console.log([data,categories])
  },[data,categories])


  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);




  const handleSelectCategories = (id) => {

    setSelectedCategories((prev) => {
      if (prev.includes(id)) {
        return prev.filter((c) => c !== id)
      } else {
        return [...prev, id]
      }
    })
  }


  const handleSelectedBrand = (checked, id) => {
    setSelectedBrand((prev) => {
      if (checked) {
        return [...prev, id]
      } else {
        return prev.filter((s) => s !== id)
      }
    })
  }

  if (dataLoading || categoriesLoading) return <div>loading....</div>
  if (dataError || categoriesError) return <div>{[dataError,categoriesError]}</div>
  if (!data || !categories) return <div>nincs adat</div>


  return (
    <div className='min-h-screen bg-background'>
      <div className='contanier mx-auto px-4 py-6 max-w-7xl'>


        <div className='grid grid-cols-1 lg:grid-cols-5! gap-6'>

          {/* left filters */}
          <div className='lg:col-span-1!'>
            <SideFilterSection
              selectedBrand={selectedBrand}
              brands={data.brands}
              handleSelectedBrand={handleSelectedBrand}
            />
          </div>

          {/*right listproducts */}
          <div className='lg:col-span-4!'>
            <CategoryFilter
              categories={categories}
              selectedCategories={selectedCategories}
              handleSelectCategories={handleSelectCategories}
            />
            <CategorySection
              products={data.products}
              selectedBrands={selectedBrand}
              selectedCategories={selectedCategories}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category