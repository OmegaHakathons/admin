export const View = (): JSX.Element => {

    type agregate = {
        id: number,
        name: string,
        number: string,
    };
    const agregates:agregate[] = [
        {id: 73185, name: "Siamese 18", number:	"7GU1"},
         {id: 85306, name: "Sphynx ED", number:	"CSCL"},
         {id: 98944, name: "Donskoy 6E", number:	"GFYD"},
         {id: 70879, name: "Devon Rex CP", number: "FEHV"},	
         {id: 91170, name: "Thai BT", number:	"KE3C"},
         {id: 81495, name: "Tonkinese PW", number:	"OAHJ"},
         {id: 36310, name: "Sokoke DF", number:	"0KLR"},
         {id: 7827, name: "Singapura 6R", number:	"HWJJ"},
         {id: 92457, name: "American Shorthair 1I", number: "D4LZ"}
    ]

    agregates.sort((a, b) => a.id - b.id);

    return <div className='w-full flex flex-col gap-2'>
        {agregates.map(x => <div className="flex justify-between bg-white rounded-md p-4">
            <div>
                <div>ID: {x.id}</div>
                <div>Название: {x.name}</div>
                <div>Номер: {x.number}</div>
            </div>
            <div className="flex flex-col justify-between">
                <button className="white rounded-md text-right">❌</button>
                <button className="bg-blue-900 rounded-md p-1 text-white">Редактировать</button>
            </div>
        </div>)}
   </div>
}