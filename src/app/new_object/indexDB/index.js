export const index = () => {
    let request = window.indexedDB.open("testDB");
    request.onerror = function (event) {
        console.log("testDB already existed")
    }
    request.onsuccess = (event) => {
        // 版本未发生变动，后续早错在这里
        const db = request.result
        console.log("testDB open success", db)

    }
    request.onupgradeneeded = (event) => {
        // 版本变动后 后续操作在这里
        console.log("数据库版本号发生了变动", event.target.result)
        const db = event.target.result
        let objectStore;
        if (!db.objectStoreNames.contains('person')) {
            objectStore = db.createObjectStore('person', { keyPath: 'id' });
            objectStore.createIndex('name', 'name', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            add(db);
            read(db);
            readAll(db);
            update(db);
            remove(db);
        }
    }
}

function add(db) {
    const request = db.transaction(['person'], 'readwrite')
        .objectStore('person')
        .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' });

    request.onsuccess = function (event) {
        console.log('数据写入成功');
    };

    request.onerror = function (event) {
        console.log('数据写入失败');
    }
}

function read(db) {
    const transaction = db.transaction(['person']);
    const objectStore = transaction.objectStore('person');
    const request = objectStore.get(1);

    request.onerror = function (event) {
        console.log('事务失败');
    };

    request.onsuccess = function (event) {
        if (request.result) {
            console.log('Name: ' + request.result.name);
            console.log('Age: ' + request.result.age);
            console.log('Email: ' + request.result.email);
        } else {
            console.log('未获得数据记录');
        }
    };
}

function readAll(db) {
    const objectStore = db.transaction('person').objectStore('person');

    objectStore.openCursor().onsuccess = function (event) {
        const cursor = event.target.result;

        if (cursor) {
            console.log('Id: ' + cursor.key);
            console.log('Name: ' + cursor.value.name);
            console.log('Age: ' + cursor.value.age);
            console.log('Email: ' + cursor.value.email);
            cursor.continue();
        } else {
            console.log('没有更多数据了！');
        }
    };
}

function update(db) {
    const request = db.transaction(['person'], 'readwrite')
        .objectStore('person')
        .put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' });

    request.onsuccess = function (event) {
        console.log('数据更新成功');
    };

    request.onerror = function (event) {
        console.log('数据更新失败');
    }
}

function remove(db) {
    const request = db.transaction(['person'], 'readwrite')
        .objectStore('person')
        .delete(1);

    request.onsuccess = function (event) {
        console.log('数据删除成功');
    };
}