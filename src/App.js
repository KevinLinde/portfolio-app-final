import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import WorkExperience from './WorkExperience';
import Education from './Education';
import TechnologySummary from './TechnologySummary';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="container">
                <div className="row mt-3">
                    <div className="col-md">
                        <WorkExperience />

                    </div>
                    <div className="col-md">
                        <Education />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md mb-5">
                        <TechnologySummary />
                    </div>
                </div>
            </main>


        </div>
    );
}

export default App;