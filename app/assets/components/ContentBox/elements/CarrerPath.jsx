export default function CarrerPath(p) {
    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -start-1.5 "></div>
            <time className="mb-1 text-sm font-normal leading-none text-white">{p.startDate} - {p.endDate}</time>
            <h3 className="text-lg font-semibold text-white inter-medium">{p.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-300">
                {p.description}
            </p>
        </li>
    );
}