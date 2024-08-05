import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.png"

export default function Logo({style,width}) {
    return (
        <div style={style}>
            <Link href={"./"}>
                <Image src={logo} alt='Log' width={width} height={width} />
            </Link>
        </div>
    );
}
Logo.defaultProps = {
    style : {},
    width : 50,
}