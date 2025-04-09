import './App.scss';
import { timelineService } from './common/services/timeline';
import { useEffect, useState } from 'react';

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
        <div>
            <h2>Good luck with your assignment! {"\u2728"}</h2>
            <h3>{timelineItems.length} timeline items to render</h3>
        </div>
    );
};

export default App;
