export const performance = () => {

}

function calculate_time() {
    let startTime;
    let endTime;

    startTime = performance.now();
    do_task();
    endTime = performance.now();

    return (endTime - startTime);
}

const do_task = () => {

}