import { timelineService } from './common/services/timeline';
import { useEffect, useState } from 'react';
import Header from './common/components/Header/Header';
import Timeline from './common/components/Timeline/Timeline';
import Footer from './common/components/Footer/Footer';

import './App.scss';

const App = () => {

    const [timelineItems, setTimelineItems] = useState([]);

    const init = () => {
        getTimelineItems();
    };

    const getTimelineItems = async () => {
        const response = await timelineService.getItems();
        setTimelineItems(response);
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Timeline />
            </main>
            <Footer />
        </>
    );
};

export default App;
