const Manifesto = () => {
  return (
    <>
        <section className = "relative my-32">
            <div className = "absolute inset-0 -z-10 flex justify-center">
                <div className = "h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            <div className = "mx-auto max-w-4xl px-6 max-[300px]:px-3 max-xl:text-center max-xl:max-w-full">
                <div className = "space-y-4">
                    <h2 className = "manifesto-title font-extrabold bg-linear-to-r from-sky-100 via-blue-300/60 to-sky-700 bg-clip-text text-transparent font-display leading-tight text-5xl max-lg:text-[39px]">
                        Clean code.
                        <br />
                        Thoughtful interfaces.
                        <br />
                        <span>Built with purpose.</span>
                    </h2>

                    <p className = "max-w-2xl max-xl:max-w-full mt-6 leading-relaxed text-zinc-400">Every pixel intentional. Every component designed to last.</p>
                </div>
            </div>
        </section>
    </>
  );
};

export default Manifesto;
