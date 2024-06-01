// import { getBooks } from "@/lib/data";
import { EditButton, DeleteButton } from "@/components/button";

const getBooks = async () => {
    const res = await fetch(process.env.BASE_URL+'/api/post', {next: {revalidate:0}})
    const json = await res.json()
    return json 
}

const Page = async () =>{
    const books = await getBooks()

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Nama Buku</th>
                    <th className="py-3 px-6">Penulis</th>
                    <th className="py-3 px-6">Penerbit</th>
                    <th className="py-3 px-6">Genre</th>
                    <th className="py-3 px-6 text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {books?.books?.map((post: any, index :number) => (
                    <tr key={post.id} className="bg-white border-b">
                    <td className="py-3 px-6">{index+1}</td>
                    <td className="py-3 px-6">{post.nama_buku}</td>
                    <td className="py-3 px-6">{post.penulis}</td>
                    <td className="py-3 px-6">{post.penerbit}</td>
                    <td className="py-3 px-6">{post.genre}</td>
                    <td className="flex justify-center gap-1 py-3"> 
                        <EditButton id={post.id}/>
                        <DeleteButton id={post.id}/>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Page