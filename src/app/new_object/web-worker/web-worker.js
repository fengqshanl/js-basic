import { work } from "./work";
export const web_worker = () => {
    console.log(work);
    const blob = new Blob(['(' + work.toString() + ')()']);
    const url = window.URL.createObjectURL(blob);
    let worker = new Worker(url)
    worker.onerror = function (e) {
        console.log([
            'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
        ].join(''));
    };
    worker.onmessage = function (event) {
        console.log('Received message ' + event.data)
    }
    worker.postMessage('Hello World');
    worker.postMessage({ method: 'echo', args: ['Work'] });
    worker.terminate();
}