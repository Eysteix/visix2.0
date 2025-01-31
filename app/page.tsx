import Typewrite from "@/components/typewriter"

const Home = ()=>{
    const info:string[] = ["Welcome  !!","My Name is Marvelous Adeola Ajao ", "I am a software engineer",]
    return (
        <main className="h-screen">
      
        <section className="hero h-[50vh] bg-violet-200">
         <div className="bg-background/35 w-full h-full flex justify-between items-center p-4">
         <div className="left ">
         <h1 className="text-3xl font-bold text-white uppercase leading-loose
         "><Typewrite text={info}/></h1>

         </div>
         <div className="right">

         </div>
         </div>
        </section>
        </main>
    )
}

export default Home