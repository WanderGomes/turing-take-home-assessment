import mockData from './mock.json'

export default class TimelineService {

    // Note: in the future, a base HttpClient could be used to make the request.
    async getItems() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (mockData) {
                    resolve(mockData);
                } else {
                    reject(new Error('[Timeline] Failed to get items.'));
                }
            }, 500); // Note: simulating response time for an asynchronous request
        });
    }
}
