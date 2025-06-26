import Link from "next/link";
import {movieService} from "@/services/api.service";


interface Props {
    selectedGenreId?: string
}

const GenresComponent = async ({selectedGenreId}: Props) => {
    const genres = await  movieService.getGenres()
    return (
        <div className="h-[calc(100vh-100px)] overflow-y-auto bg-black text-white p-4">
            {genres.length === 0 && <p>Жанри поки не завантажені</p>}
            <p>Genre: </p>
            {
                genres.map(item => {
                    const Active = selectedGenreId === String(item.id)

                    return (
                        <p key={item.id}>
                            <Link href={`/?genre=${item.id}&page=1`}
                                  className={`  ${Active ? 'text-blue-400 underline' : 'bg-black text-white'}`}>
                                {item.name}
                            </Link>
                        </p>)
                })}
        </div>
    );
};

export default GenresComponent;