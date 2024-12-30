
export default function HeaderButtons(p) {
    return (
        <div>
            <a href={p.link}>
                <button className="transition-all poppins-medium text-lg px-5 text-white text-center hover:bg-[#8a3099] bg-[#6D257A] p-1 rounded-lg">{p.text}</button>
            </a>
        </div>
    );
}