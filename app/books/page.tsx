import BookTable from "@/components/book-table";
import { CreateButton } from "@/components/button";
const Books = () => {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
            <h1>LIST of INDONESIAN-ENGLISH NOVELS</h1>           
            <CreateButton />
            </div>
            <BookTable />
        </div>
    )
}
export default Books