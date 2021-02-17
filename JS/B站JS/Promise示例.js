function callFireming(success) {
    return new Promise((resolve, reject) => {
        console.log('Calling Fireming...')
        setTimeout(() => {
            if (success) {
                resolve()
            } else {
                reject()
            }
        }, 3000)
    })
}

// 1 async await
async function action() {
    // resolve方法执行就会执行try里面语句
    try {
        await callFireming(true)
        console.log('Fireming picked up the phone.')
    }
    // reject方法执行就会执行catch里面语句
    catch (e) {
        console.log('Fireming rejected the call.')
    }
}
// action();

// 1.1
(async () => {
    try {
        await callFireming(true)
        console.log('Fireming picked up the phone.')
    }
    catch (e) {
        console.error('Fireming rejected the call.')
    }
})();


// 2
/* callFireming(false)
    .then(() => {
        console.log('Fireming picked up the phone.')
    }).catch(() => {
        console.log('Fireming rejected the call.')
    }) */