export default function SectionWrapper({ children, header, title }) {
    return (
        <section className="min-h-screen flex flex-col gap-10">
            <div className="bg-slate-950 py-10 flex flex-col p-4 gap-4 justify-center items-center">
                <p className="uppercase font-medium">{header}</p>
                <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
                    {title[0]}{" "}
                    <span className="uppercase text-blue-400">{title[1]}</span>{" "}
                    {title[2]}
                </h2>
            </div>
            <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
                {children}
            </div>
        </section>
    );
}
