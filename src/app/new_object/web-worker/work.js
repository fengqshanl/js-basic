export const work = (e) => {
    console.log("self", self);
    if (self) {
        self.postMessage("data")
    }
}