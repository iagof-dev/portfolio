export default function HeaderItem(p) {
    const HandleClick = () => {
        p.setPage(p.id);
    }

    return (
        <div>
            <a href={p.link}>
                <button onClick={HandleClick}>
                    <h1 className="transition-all lato-bold text-lg text-white text-center hover:bg-purple-600 px-2 rounded-lg capitalize">{p.text}</h1>
                </button>
            </a>
        </div>
    );
}
