let p=new Promise((resolve,reject)=>{
    let a=1+2;
    if(a===2)
    resolve('yay')
    else
    reject('failure')

})

p.then((message)=>{console.log(message)}).catch((err)=>{console.log(err)});

let studyPromise=new Promise((resolve,reject)=>{
    reject('no studies');
})

let playingPromise=new Promise((resolve,reject)=>{
    resolve('today played alot')
})

Promise.all(studyPromise,playingPromise).then((messages)=>{console.log('extra info '+messages)}).catch
((err)=>console.log(err));