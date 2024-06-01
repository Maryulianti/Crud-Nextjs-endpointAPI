"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateForm = ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const [nama_buku, setNama_buku] = useState("");
    const [penulis, setPenulis] = useState("");
    const [penerbit, setPenerbit] = useState("");
    const [genre, setGenre] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/post", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nama_buku,
                    penulis,
                    penerbit,
                    genre,
                    id,
                }),
            });

            console.log(res);
            router.push("/books");
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await fetch(`/api/post/${id}`);
        const json = await res.json();

        if(!json){
            router.push('/404')
            return;

        } 
        
        // menangkap data untuk update
        setNama_buku(json.post.nama_buku);
        setPenulis(json.post.penulis);
        setPenerbit(json.post.penerbit);
        setGenre(json.post.genre);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-white-900">Nama Buku</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={nama_buku}
                        onChange={(e) => setNama_buku(e.target.value)}
                        className="bg-white-500 border-gray-300 text-gray-900 text-sm rounded-sm 
                                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Nama Buku...."
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="penulis" className="block text-sm font-medium text-white-900">Penulis</label>
                    <input
                        type="text"
                        name="penulis"
                        id="penulis"
                        value={penulis}
                        onChange={(e) => setPenulis(e.target.value)}
                        className="bg-white-500 border-gray-300 text-gray-900 text-sm rounded-sm 
                                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Nama Penulis...."
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="penerbit" className="block text-sm font-medium text-white-900">Penerbit</label>
                    <input
                        type="text"
                        name="penerbit"
                        id="penerbit"
                        value={penerbit}
                        onChange={(e) => setPenerbit(e.target.value)}
                        className="bg-white-500 border-gray-300 text-gray-900 text-sm rounded-sm 
                                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Nama Penerbit...."
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="genre" className="block text-sm font-medium text-white-900">Genre</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="bg-white-500 border-gray-300 text-gray-900 text-sm rounded-sm 
                                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Genre...."
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium 
                               rounded-sm text-sm w-full px-5 py-3 text-center"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateForm;
