import { getProductById } from "@/server/actions/productApi";
import { Shoe } from "@/types/shoe";
import Image from "next/image";

export default async function Detail({ params }: any) {
  const { id } = await params;
  const data: Shoe = await getProductById(id);

  return (
    <div>
      <h1>Detail page</h1>
      <Image src={data.image} alt={data.name} width={500} height={500} />
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </div>
  );
}
