/* function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'Alex' };
            resolve(data);
        }, 1000);
    })
}

function fetchUserDataGames(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = ['game1', 'game2'];
            resolve(data);  
        }, 1000);
    })
}

function run() {
    fetchUserData()
    .then((userData) => {
        return fetchUserDataGames(userData.id);
    })
    .then((userGames) => {
        console.log(userGames);
    });
}

run()

console.log('a');
new Promise((resolve, reject) => {
	console.log('b');
	setTimeout(() => {
		console.log('c');
		resolve();
	}, 0);
})
  .then(() => console.log('d'));

console.log('e');
setTimeout(() => console.log('f'), 0);
console.log('g'); */


/* fetch('https://jsonplaceholder.typicode.com/comments')
    .then((data) => {
    return data.json();
}).then((info) => {
    console.log(info);
}); */

/* fetch(
    'https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title: 'fejqofjqeifq' }),
    }
).then((data) => {
    if (data.status === 200) {
        return data.json();
    }
    else {
        console.error('fhueqhfiueqhiufqe')
    }
    console.log(data)
    
}).then((info) => {
    console.log(info)
}); */

/* const url = `
https://api.open-meteo.com/v1/forecast?
latitude=55.751244&
longitude=37.618423&
current=temperature_2m,is_day,wind_speed_10m
`;

fetch(url).then((data) => {
    return data.json();
}).then((info) => {
    renderWeather(info.current.temperature_2m); 
    console.log(info);
});

function renderWeather (data) {
    const div = document.createElement('div');
    div.textContent = `Погода в Московии - ${data} градусов`;

    document.body.append(div);
} */