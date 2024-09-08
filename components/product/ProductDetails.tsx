import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import indianCurrency from "@/lib/IndianPrice";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Edit2 } from "lucide-react";

interface ProductDetailsPropes {
  productData: ProductType | null;
}
const ProductDetails: React.FC<ProductDetailsPropes> = ({ productData }) => {

    const router = useRouter()

  return (
    <>
      <h1 className="flex items-center justify-center my-6 text-3xl font-bold">
        {productData?.title}
      </h1>
      <hr className="bg-gray-900 py-0.5 my-10 shadow-lg rounded-xl" />
      <section className="flex items-center justify-center my-7">
        {productData?.media[0] && (
          <Carousel className="flex items-center justify-center rounded-lg border-2 border-gray-900 shadow-xl">
            <CarouselContent>
              {productData.media?.map((url) => (
                <CarouselItem className="flex items-center justify-center w-[270px] h-[350px]">
                  <Image
                    src={url}
                    alt="Product Image"
                    className="object-fill h-full w-full mix-blend-multiply rounded"
                    fill
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </section>
      <section>
        <h2 className="text-gray-950 font-bold my-3 text-lg">Discription</h2>
        <Textarea
          readOnly
          rows={8}
          className="mt-3 scrollbar-hide px-3 text-sm"
        >
          {productData?.discription}
        </Textarea>
      </section>
      <section className="flex gap-x-11 items-center my-5">
        <div className="flex items-center gap-4">
          <h1 className="text-gray-950 font-bold my-3 text-lg">
            Price &nbsp;:
          </h1>
          <p className="text-gray-500">{indianCurrency(productData?.price)}</p>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-gray-950 font-bold my-3 text-lg">Pay &nbsp;:</h1>
          <p className="text-gray-500">{indianCurrency(productData?.pay)}</p>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 lg:gap-4">
        <div className="">
            <h3 className="font-bold text-lg text-gray-950 my-5">Collections:</h3>
          <div className="flex items-center gap-2 flex-wrap ">
            {productData?.collections?.map((collection: any) => (
              <Badge className="flex items-center justify-center px-4 py-2 bg-slate-200 rounded-lg border border-gray-700 shadow-md w-fit">
                {collection.title}
              </Badge>
            ))}
          </div>
        </div>

        <div className="">
            <h3 className="font-bold text-lg text-gray-950 my-5">Size:</h3>
          <div className="flex items-center gap-2 flex-wrap ">
            {productData?.sizes?.map((item: string) => (
              <Badge className="flex items-center justify-center px-4 py-2 bg-slate-200 border-gray-700 rounded-lg border shadow-md w-fit">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="">
            <h3 className="font-bold text-lg text-gray-950 my-5">Tags:</h3>
          <div className="flex items-center gap-2 flex-wrap">
            {productData?.tags?.map((tage: string) => (
              <Badge className="flex items-center justify-center px-4 py-2 bg-slate-200 border-gray-700 rounded-lg border shadow-md w-fit">
                {tage}
              </Badge>
            ))}
          </div>
        </div>

        <div className="">
            <h3 className="font-bold text-lg text-gray-950 my-5">Colors:</h3>
          <div className="flex items-center gap-2 ">
            {productData?.colors?.map((color: string) => (
              <Badge className="flex items-center justify-center px-4 py-2 bg-slate-200 border-gray-700 rounded-lg border shadow-md w-fit">
                {color}
              </Badge>
            ))}
          </div>
        </div>

        <div className="">
            <h3 className="font-bold text-lg text-gray-950 my-5">Category:</h3>
          <div className="flex items-center gap-2 flex-wrap">
            {productData?.category}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-around my-6">
      <Button
              onClick={() => router.push("/products")}
              className="px-3 py-3 bg-orange-500 text-body-bold hover:bg-white hover:border text-lg border-black rounded-md text-white  hover:text-black"
            >
              Back
            </Button>
            <Link
              href={{
                pathname: "/products/edit",
                query: {id: productData?._id}
              }}
              className="px-3 flex items-center gap-x-2 flex-nowrap py-1.5 bg-blue-800 text-body-bold hover:bg-white hover:border text-lg border-black rounded-md text-white  hover:text-black"
            >
              <Edit2 className="w-4 h-4"/> Edit
            </Link>
      </section>
    </>
  );
};

export default ProductDetails;
