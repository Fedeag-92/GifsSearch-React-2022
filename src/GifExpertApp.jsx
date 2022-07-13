import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categorias, setCategorias] = useState([])

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return;

    setCategorias([newCategory, ...categorias]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {
        categorias.map(categoria => 
          <GifGrid key={categoria} category={categoria} />
        )
      }

    </>
  )
}
