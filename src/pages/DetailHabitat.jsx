import { useParams } from "react-router-dom";

function DetailHabitat() {
  const {id} = useParams()
  return (
    <div>{`Params est ${id}` }</div>
  )
}

export default DetailHabitat ;