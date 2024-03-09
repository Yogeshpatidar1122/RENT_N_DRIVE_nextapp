import { Banner } from '@/components'
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter } from "@/components";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  
    
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Banner />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='flex flex-col items-center justify-center  gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold '>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='mt-12 w-full flex items-center justify-between gap-2 '>
          <div>
            <SearchBar />
          </div>

          <div className='flex gap-2 flex-wrap sm:w-auto sm:flex-start'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className=' mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}