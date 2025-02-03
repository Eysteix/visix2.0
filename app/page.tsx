import Typewrite from "@/components/typewriter"

const Home = ()=>{
    const info:string[] = ["Welcome  !!","My Name is Marvelous Adeola Ajao ", "I am a software engineer",]
    return (
        <main className="h-screen">
          <section className="hero  bg-violet-200 w-full">
           <div className="bg-background/15 w-full h-[50vh] flex flex-col md:flex-row  gap-5 justify-around items-center p-4">
          
          <div className="left text-center w-half p-10">
           <h1 className="text-xl font-bold text-white  uppercase leading-loose text-center text-wrap
           ">
            <Typewrite text={info}/>
            </h1>
        </div>

         
           </div>
          </section>

        </main>
    )
}

export default Home

{/* <div className="right w-half mt-5">
<div className="circle rounded-full bg-primary w-48 h-48 lg:w-96 lg:h-96 flex justify-center items-center">
<Image src="/hero.webp" alt="myImg" width={400} height={400} />
</div>
</div> */}