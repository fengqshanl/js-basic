export const functionObject = (e) => {
    function te() {
        console.log("te exec", this)
        this.a = 1
        this.b = 2
    }
    const ta = () => {
        console.log("ta exec", this)
    }
    let obj_null = Object(null)
    let obj_undefined = Object(undefined)
    let obj_false = Object(false)
    let obj_number = Object(1)
    let obj_function = Object(te)
    let a = console.log("Object.create")
    let obj_date = Object(new Date())
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
        obj_function, typeof obj_function, te instanceof obj_function
    )
    console.log("object", Object({
        c: 3,
        d: 4
    }))
    console.log("date", obj_date, typeof obj_date)
}