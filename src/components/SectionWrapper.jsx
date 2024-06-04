export default function SectionWrapper({ children, header, title }) {
    return (
        <section className="min-h-screen flex flex-col gap-10">
            <div className="bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center">
                <p className="uppercase font-medium">{header}</p>
                <h2>{title[0]} <span className="uppercase">{title[1]}</span>{title[2]}</h2>
            </div>
            {children}
        </section>
    );
}