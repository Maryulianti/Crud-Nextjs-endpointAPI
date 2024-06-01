import UpdateForm from "@/components/edit-form";

const UpdateBookPage = ({
    params,
}: {
    params: { id: string };
}) => {
    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Update Book</h1>
            <UpdateForm params={params} />
        </div>
    );
};

export default UpdateBookPage;
