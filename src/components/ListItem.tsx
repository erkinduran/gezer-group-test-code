import Character from "@/types/Character"
import Status from "./Status"

export default function ListItem({ item }: { item: Character }) {
    return (
        <a href="#" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item?.image} alt={item?.name} />
            <div className="flex flex-col p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 inline-block"> <Status status={item?.status} /> {item?.status} - {item?.species}</p>
                <p className="text-sm"> Last known location: </p>
                <p className="text-xl"> {item?.location?.name} </p>
            </div>
        </a>
    )
}