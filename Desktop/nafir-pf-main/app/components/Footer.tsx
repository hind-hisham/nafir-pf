export default function Footer() {
    return (
        <footer className="flex h-24 w-full items-center justify-center border-t">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Nafir Initiative. All rights reserved.
            </p>
        </footer>
    )
}