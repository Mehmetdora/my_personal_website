import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { anasayfa, hakkimda, iletisim, projeler, yazilarim } from '@/routes';
import { Link } from '@inertiajs/react';

const nav = [
    { label: 'Anasayfa', href: anasayfa },
    { label: 'Hakkımda', href: hakkimda },
    { label: 'Projeler', href: projeler },
    { label: 'Yazılarım', href: yazilarim },
    { label: 'İletişim', href: iletisim },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
                <Link
                    href={anasayfa.get()} /* Ana sayfaya yönlendir  */
                    className="font-semibold tracking-tight"
                >
                    Mehmet Dora
                </Link>

                {/* Desktop nav */}
                <nav className="ml-auto hidden md:flex">
                    <NavigationMenu className="">
                        <NavigationMenuList>
                            {nav.map((item) => (
                                <NavigationMenuItem key={item.label}>
                                    <Link
                                        href={item.href.get()}
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        {item.label}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-2">
                    {/* <Link href={route('login')}>
                        <Button
                            variant="outline"
                            className="hidden md:inline-flex"
                        >
                            Admin
                        </Button>
                    </Link> */}

                    {/* Mobile menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline">Menu</Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Actions</SheetTitle>
                                </SheetHeader>

                                <div className="mt-6 flex flex-col gap-2">
                                    {nav.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href.get()}
                                            className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
