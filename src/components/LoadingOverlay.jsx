export const LoadingOverlay = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-99">
            <div className="px-8 py-8 border-8 border-solid border-white border-t-8 border-t-solid border-t-blue-400 rounded-full animate-[spin_1s_linear_infinite] " />
        </div>
    )
}