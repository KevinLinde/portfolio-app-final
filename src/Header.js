import Profilepic from './profile.jpg';

function Header() {
    return (
        <>
            <header className="text-white bg-dark" >
                <div className="container py-5">
                    <div className="row">
                        <div className="col-xs-3 col-lg-2 text-center">

                            <img src={Profilepic} alt="Profilepic"
                                className="border border-5 rounded-circle img-fluid" style={{ fontSize: '150px', height: '150px' }} />
                        </div>
                        <div className="col text-center text-lg-start">
                            <h1>Kevin Linde</h1>

                            <p className="lead">Software development student at SAIT (Southern Alberta Institute of Technology).</p>

                            <ul className="list-inline">
                                <li className="list-inline-item my-2"><a href="mailto:kevin.linde99@gmail.com" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-envelope pe-1"></i>
                                    <span className="text-center">E-mail</span></a></li>
                                <li className="list-inline-item my-2"><a href="https://www.linkedin.com/in/kevinlinde0/" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-linkedin pe-1"></i>
                                    LinkedIn</a></li>
                                <li className="list-inline-item my-2"><a href="https://github.com/KevinLinde" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-github pe-1"></i>
                                    GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );

}
export default Header;