'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function NavBar() {
    const path = usePathname();

    // Split the path into segments and capitalize each word
    const pathLabels = path
        .replace("/","")
        .split('/')
        .map(part => part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

    // Build the paths for each part
    const paths = path
        .replace("/","")
        .split('/')
    const slash = "/"
    const allPaths = paths.map((path,i) => slash.concat(paths.slice(0,i+1).join("/")))
    return (
        <div className='pl-6 pt-1 pb-2 text-text_path text-[.6rem] flex flex-wrap '>
            {pathLabels.map((currLabel, index) => {
                const isLast = (index === (pathLabels.length - 1)); // Check if this is the last part

                return (
                    <div key={index} className='flex items-center'>
                        {!isLast ? (
                            <Link href={allPaths[index]} className="text-text_path hover:text-text_path_current underline underline-offset-[4px]">
                                {currLabel}
                            </Link>
                        ) : (
                            <span className="text-text_path_current underline underline-offset-[4px]">{currLabel}</span> // Greyed out last part
                        )}
                        {!isLast && <span className="mx-1">/</span>}
                    </div>
                );
            })}

        </div>
    )
}

// implement Link such that actually navigable, color it such that current Link is grey, past link is purple, new is peach. use .map, 