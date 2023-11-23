import Link from "next/link"

const ReturnButton: React.FC = () => {
    return (
        <Link href="/">
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                <path d="M16 12H8M8 12L11.5 15.5M8 12L11.5 8.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path>
            </svg>
        </Link>
    );
}

export default ReturnButton;