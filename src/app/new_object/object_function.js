export const functionObject = (e) => {
    function te() {
        this.a = 1
        this.b = 2
    }
    let obj_null = Object(null)
    let obj_undefined = Object(undefined)
    let obj_false = Object(false)
    let obj_number = Object(1)
    console.log("Object.create")
    console.log("null - undefined",
        obj_null, obj_undefined,
        obj_undefined == obj_null, obj_null == obj_undefined
    )
    console.log("1",
        obj_number, obj_number === 1, obj_number == 1, typeof obj_number
    )
    console.log("false",
        obj_false, obj_false === false, obj_false == false, typeof obj_false
    )
    console.log("function",
        Object(te)
    )
    console.log("obecjt", Object({
        c: 3,
        d: 4
    }))
}