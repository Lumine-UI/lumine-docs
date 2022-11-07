import { ExternalLink } from "./ExternalLink";

export default function Footer() {
    return (
        <footer className="py-4 max-w-prose w-full">
            <div className="border-t opacity-30 border-t-gray-80 dark:border-t-gray-40 h-8" />
            <div className="rounded-lg md:flex md:items-center md:justify-between p-1">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    <ExternalLink href={"https://github.com/Lumine-UI"} className="hover:underline">
                        Lumine UI
                    </ExternalLink>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <ExternalLink href={"https://github.com/Lumine-UI"} className="hover:underline">
                            GitHub
                        </ExternalLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}