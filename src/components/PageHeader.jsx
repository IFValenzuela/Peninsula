// Shared header band for interior pages — light, so navy stays exclusive to the footer.
// surface: 'mist' (default) or 'white' when the next section is already mist.
export default function PageHeader({ kicker, title, lead, surface = 'mist' }) {
    return (
        <section className={`pt-36 pb-16 md:pt-44 md:pb-24 ${surface === 'white' ? 'bg-white border-b border-line' : 'bg-mist'}`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
                {kicker && <p className="kicker text-teal-dark mb-6">{kicker}</p>}
                <h1 className="t-statement max-w-[20ch] mx-auto">{title}</h1>
                {lead && <p className="t-lead mt-6 text-muted max-w-[46ch] mx-auto">{lead}</p>}
            </div>
        </section>
    )
}
