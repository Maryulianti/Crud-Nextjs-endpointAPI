"use client";
import Link from "next/link";
import {IoAddSharp, IoPencil, IoTrashOutline} from "react-icons/io5";
import { useRouter } from "next/navigation";

//Button Tambah Data
export const CreateButton = () => {
    return (
        <Link as="font" href="/books/create" className="inline-flex items-center space-x-1 text-white
        bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
            <IoAddSharp size = {20} />
            Create
        </Link>

    )
}

// Button Edit Data
export const EditButton = ({ id }: { id: string }) => {
    return (
        <Link as="font" href={`/books/update/${id}`} className="rounded-sm border p-1 hover:bg-gray-100">
            <IoPencil size={20} />
            Edit
        </Link>
    );
};

//Button Delete Data
interface Props{
    id : String
}

export const DeleteButton = ({id}: Props) => {
    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = confirm("Are you sure you want to delete this item?");
        if (!confirmed) return;

        try {
            const response = await fetch(`/api/post?id=${id}`, {
                method: 'DELETE',
            });
 
            if (response.ok) {
                alert("Deleted successfully!");
                router.refresh(); // Refresh the page or navigate to another page
            } else {
                alert("Failed to delete.");
            }
        } catch (error) {
            console.error("Error deleting:", error);
            alert("An error occurred. Please try again.");
        }
    };
    return (
        <button className="rouded-sm border p-1 hover:bg-gray-100">
            <IoTrashOutline size = {20} onClick={handleDelete} />
            Delete
        </button>

    )
}