import Head from "next/head";
import Sidebar from '../Sidebar'

const Layout = ({children}) => {
    return (
        <div className="flex">
            <Head>
                <title> redux toolkit </title>
            </Head>
            <Sidebar />
            <main>
                { children }
            </main>
        </div>
    )
}

export default Layout;