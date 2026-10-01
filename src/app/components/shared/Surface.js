const Surface = ({ children , className , id }) => {
    return (
        <>
            <section id = {id} className = {`border dark:border-neutral-700/60 border-neutral-200/50 bg-neutral-100 dark:bg-neutral-900 p-20 ${className} rounded-xl`}>
                {children}
            </section>
        </>
    );
};

export default Surface;