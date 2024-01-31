import Link from "next/link";

export default function Home(){
  return (
    <main className="flex flex-col justify-center px-[16rem] py-[7rem]">
      <div>
        <h1 className="text-4xl font-bold py-[1rem]">CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
          <li className="hover:text-green-400 hover:underline"><Link href='/week-2'> Week 2 Assignment</Link></li>
          <li className="hover:text-green-400 hover:underline"><Link href='/week-3'> Week 3 Assignment</Link></li>
          <li className="hover:text-green-400 hover:underline"><Link href='/week-4'> Week 4 Assignment</Link></li>
        </ul>
      </div>
    </main>
  )
}