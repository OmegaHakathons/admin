import { Link } from "react-router-dom"

export const Sidebar = (): JSX.Element => {
  const hr = <hr className="border-1"></hr>
    return <div className="p-4 rounded-2xl h-full w-1/5 bg-white">
    <div className='pt-4 flex flex-col gap-4'>
      <div className="font-bold flex justify-between"><Link to={"/"}>Агрегаты </Link><div>➕</div></div>
      {hr}
      <div><Link to={"/"}>Машины</Link></div>
      {hr}
      <div><Link to={"/"}>Задачи</Link></div>
      {hr}
      <div><Link to={"/"}>Культуры</Link></div>
      {hr}
      <div><Link to={"/"}>Поля</Link></div>
      {hr}
      <div><Link to={"/"}>Люди</Link></div>
    </div>
  </div>
}