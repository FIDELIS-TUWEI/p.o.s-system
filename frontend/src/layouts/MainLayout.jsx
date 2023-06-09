import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
    return ( 
        <>
            <header>
                <nav className="navbar navbar-light bg-primary">
                    <div className="container">
                        <Link to="/" className="navbar-brand">DevPOS</Link>
                    </div>
                </nav>
                </header>

                <main>
                    <div className="container mt-3">
                        { children }
                    </div>
                </main>
        </>
     );
}
 
export default MainLayout;