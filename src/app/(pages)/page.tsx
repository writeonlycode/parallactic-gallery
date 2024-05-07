import Item from "@/components/atomic/Item";
import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data, error } = await supabase.storage.from("images").list();

  const leftColumn = data?.filter((_item, index) => index % 2 === 0);
  const rightColumn = data?.filter((_item, index) => index % 2 === 1);

  const firstColumn = data?.filter((_item, index) => index % 3 === 0);
  const secondColumn = data?.filter((_item, index) => index % 3 === 1);
  const thirdColumn = data?.filter((_item, index) => index % 3 === 2);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-[1.5rem]">
      <section className="mx-auto grid w-full gap-[1.5rem] md:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col gap-[2.5rem] md:hidden">
          {data?.map((image, index) => <Item key={image.id} {...image} />)}
        </div>
        <div className="hidden flex-col gap-[2.5rem] md:flex xl:hidden">
          {leftColumn?.map((image, index) => <Item key={image.id} {...image} />)}
        </div>
        <div className="hidden flex-col gap-[2.5rem] md:flex xl:hidden">
          {rightColumn?.map((image, index) => <Item key={image.id} {...image} />)}
        </div>
        <div className="hidden flex-col gap-[2.5rem] xl:flex">
          {firstColumn?.map((image, index) => <Item key={image.id} {...image} />)}
        </div>
        <div className="hidden flex-col gap-[2.5rem] xl:flex">
          {secondColumn?.map((image, index) => <Item key={image.id} {...image} />)}
        </div>
        <div className="hidden flex-col gap-[2.5rem] xl:flex">
          {thirdColumn?.map((image, index) => <Item key={image.id} {...image} />)}
        </div>
      </section>
    </main>
  );
}
