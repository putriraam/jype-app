import Link from "next/link"

interface IButtonLink {
    children: string
    href: string
}

export default function ButtonLink({children, href}: IButtonLink) {
    return (
        <Link href={href}>
            <button>
                {children}
            </button>
        </Link>
    )
}