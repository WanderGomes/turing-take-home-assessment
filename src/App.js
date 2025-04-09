import Header from './common/components/Header/Header';
import Timeline from './common/components/Timeline/Timeline';
import Footer from './common/components/Footer/Footer';

import './App.scss';

const App = () => {

    return (
        <>
            <Header/>
            <main>
                <Timeline/>
            </main>
            <Footer/>
        </>
    );
};

export default App;
