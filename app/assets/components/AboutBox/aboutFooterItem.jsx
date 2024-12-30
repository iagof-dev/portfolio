import Image from "next/image";

export default function AboutFooterItem(p) {
    return (
        <div className="items-end m-2 place-items-end place-content-end">
            <a href={p.ref} download={p.isDownloadable}>
                <Image className="mx-2 invert rounded select-none" width={24} height={24} src={p.icon} alt="" />
            </a>
        </div>
    );

}