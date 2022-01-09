import { useSession, signOut } from "next-auth/client";
import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
    const [session, loading] = useSession();

    function logoutHandler() {
        signOut();
    }

    return (
        <header className={classes.header}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                {!session && !loading && (
                    <li>
                    <Link href="/auth">Login</Link>
                    </li>
                )}
                {session && (
                    <li>
                    <Link href="/profile">Profile</Link>
                    </li>
                )}
                {session && (
                    <li>
                    <button onClick={logoutHandler}>Logout</button>
                    </li>
                )}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;