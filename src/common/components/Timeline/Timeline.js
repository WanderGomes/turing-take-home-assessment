import './Timeline.scss';
import { useEffect, useState } from 'react';
import { timelineService } from '../../services/timeline';

const Timeline = () => {

    const [timelineItems, setTimelineItems] = useState([]);
    const [lanes, setLanes] = useState([]);

    const init = () => {
        getTimelineItems();
    };

    const getTimelineItems = async () => {
        try {
            const response = await timelineService.getItems();
            setTimelineItems(response);
            assignLanes(response);
        } catch (e) {

        }
    };

    const assignItemToLane = (list, item) => {
        for (const lane of lanes) {
            if (new Date(lane[lane.length - 1].end) < new Date(item.start)) {
                lane.push(item);
                return;
            }
        }
        list.push([item]);
    }

    const assignLanes = (items) => {
        const sortedItems = items.sort((a, b) =>
            new Date(a.start) - new Date(b.start)
        );

        const list = [];

        for (const item of sortedItems) {
            assignItemToLane(item);
        }

        setLanes(list);
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <div className='timeline'>
            <div className='timeline__header'>
                <div className='timeline__title'>
                    <strong>April</strong>
                    <span>2025</span>
                </div>
                <div className='timeline__actions'>
                    <button className='turing-button turing-button--active'>Today</button>
                    <button className='turing-button turing-button--secondary'>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className='turing-button turing-button--secondary'>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className='timeline__week-days'>
                <div className='timeline__day'>
                    <small>SUN</small>
                    <strong>06</strong>
                </div>
                <div className='timeline__day'>
                    <small>MON</small>
                    <strong>07</strong>
                </div>
                <div className='timeline__day'>
                    <small>TUE</small>
                    <strong>08</strong>
                </div>
                <div className='timeline__day'>
                    <small>WED</small>
                    <strong>09</strong>
                </div>
                <div className='timeline__day'>
                    <small>THU</small>
                    <strong>10</strong>
                </div>
                <div className='timeline__day'>
                    <small>FRI</small>
                    <strong>11</strong>
                </div>
                <div className='timeline__day'>
                    <small>SAT</small>
                    <strong>12</strong>
                </div>
            </div>
            <div className="timeline__grid">
                <div className="timeline__day-items">
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                </div>

                <div className="timeline__day-items">
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                </div>

                <div className="timeline__day-items">
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                </div>

                <div className="timeline__day-items">
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                </div>

                <div className="timeline__day-items">
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                </div>

                <div className="timeline__day-items">
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                </div>

                <div className="timeline__day-items">
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                    <div className="timeline__item">
                        <div className="timeline__item-title">
                            Teste
                        </div>
                        <div className="timeline__item-range">
                            Jan 01 - Jan 02
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
