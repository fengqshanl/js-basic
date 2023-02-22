export const array_buffer = () => {
    const buffer = new ArrayBuffer(16);
    console.log("buffer", buffer);
    const int32View = new Int32Array(buffer);
    console.log("int-32", int32View);
    for (let i = 0; i < int32View.length; i++) {
        int32View[i] = i * 2;
    }
    console.log("int-32", int32View);
    const normalArray = Array.from(int32View);
    console.log("normalArray", normalArray)
}