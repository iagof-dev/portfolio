import Image from "next/image";

export default function AboutItem(p) {
    return (
        <div className="flex mx-auto px-2 w-56">
            <Image className="invert m-2 rounded select-none" width={32} height={32} src={p.icon} alt="" />
            <div className="flex flex-col">
                <h1 className="text-gray-200 mt-2 text-sm select-none inter-medium">{p.title}</h1>
                <a href={p.ref}><span className="text-white leading-3 text-sm inter-medium">{p.value}</span></a>
            </div>
        </div>
    );
}