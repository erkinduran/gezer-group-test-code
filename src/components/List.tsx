'use client'

import { useEffect, useState } from "react"
import Request from "@/services/Request"
import Character from "@/types/Character"
import ListItem from "./ListItem"
import CharacterRequest from "@/types/CharacterRequest"
import { ucwords } from "@/helpers"

interface StatusType {
    page: number
    status: string | null
    gender: string | null
}

export default function List() {
    const [list, setList] = useState<null | CharacterRequest>(null)
    const [params, setParams] = useState<StatusType>({
        page: 1,
        status: null,
        gender: null
    });
    const [statusOpened, setStatusOpened] = useState<boolean>(false)
    const [genderOpened, setGenderOpened] = useState<boolean>(false)
    const [speciesOpened, setSpeciesOpened] = useState<boolean>(false)
    const statuses = [
        'unknown',
        'alive',
        'dead',
    ]
    const genders = [
        'female',
        'male',
        'genderless',
        'unknown'
    ]
    const species = [
        'human',
        'alien'
    ]

    const getList = async () => {
        let queryArr = []
        for (const [key, value] of Object.entries(params)) {
            if (typeof value !== 'undefined' && value !== null) {
                queryArr.push(`${key}=${value}`);
            }
        }
        const result = await Request.get('https://rickandmortyapi.com/api/character?' + queryArr.join('&'))
        setList(result)
    }

    useEffect(() => {
        getList()
    }, [])

    useEffect(() => {
        getList()
    }, [params])

    return (
        <div className="w-full p-14">
            <div className="grid grid-cols-4 gap-4 mb-10">

                <div className="relative inline-block text-left">
                    <div className="cursor-pointer" onClick={() => setStatusOpened(!statusOpened)}>
                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Status
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {statusOpened ? <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            {statuses.map((item: string, key: number) =>
                                <a
                                    href="javascript:"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    onClick={() => setParams({ ...params, page: 1, status: item })}
                                    key={key}
                                >{ucwords(item)}</a>
                            )}
                        </div>
                    </div> : null}
                </div>

                <div className="relative inline-block text-left">
                    <div className="cursor-pointer" onClick={() => setGenderOpened(!genderOpened)}>
                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Gender
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {genderOpened ? <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            {genders.map((item: string, key: number) =>
                                <a
                                    href="javascript:"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    onClick={() => setParams({ ...params, page: 1, gender: item })}
                                    key={key}
                                >{ucwords(item)}</a>
                            )}
                        </div>
                    </div> : null}
                </div>

                <div className="relative inline-block text-left">
                    <div className="cursor-pointer" onClick={() => setSpeciesOpened(!speciesOpened)}>
                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Species
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {speciesOpened ? <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            {species.map((item: string, key: number) =>
                                <a
                                    href="javascript:"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    onClick={() => setParams({ ...params, page: 1, species: item })}
                                    key={key}
                                >{ucwords(item)}</a>
                            )}
                        </div>
                    </div> : null}
                </div>

            </div>

            <div className="grid grid-cols-2 gap-4">
                {list ? list.results?.map((item: Character) => <ListItem item={item} key={item.id} />) : ''}
            </div>

            <div className="navigator w-full flex flex-row justify-between p-12">
                {list?.info?.prev ? <img src="/icons/prev.svg" className="navigator_icon prev" onClick={() => setParams({ ...params, page: params.page - 1 })} /> : <img src="/icons/prev.svg" className="navigator_icon prev disabled" />}
                {list?.info?.next ? <img src="/icons/next.svg" className="navigator_icon next" onClick={() => setParams({ ...params, page: params.page + 1 })} /> : <img src="/icons/next.svg" className="navigator_icon next disabled" />}
            </div>
        </div>
    )
}