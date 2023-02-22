export const clipboard_read_text = () => {
    const clipboardObj = window.navigator.clipboard;
    if (clipboardObj) {
        navigator.clipboard.readText().then((data) => {
            console.log("read text", data)
        })
    }
}

export const clipboard_read_anything = () => {
    const clipboardObj = window.navigator.clipboard;
    if (clipboardObj) {
        navigator.clipboard.read().then((data) => {
            for (const clipboardItem of data) {
                console.log("data", data)
                for (const type of clipboardItem.types) {
                    clipboardItem.getType(type).then((blob) => {
                        console.log(URL.createObjectURL(blob));
                    })
                }
            }
        })
    }
}

export const clipboard_write_text = () => {
    const clipboardObj = window.navigator.clipboard;
    if (clipboardObj) {
        navigator.clipboard.writeText("write - text");
    }
}

export const clipboard_write_anything = () => {
    const clipboardObj = window.navigator.clipboard;
    if (clipboardObj) {
        const imgURL = 'https://dummyimage.com/300.png';
        fetch(imgURL).then((data) => {
            data.blob().then((blob) => {
                navigator.clipboard.write([
                    new ClipboardItem({
                        [blob.type]: blob
                    })
                ]).then(() => {
                    console.log("write done")
                })
            })
        })
    }
}
