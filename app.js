document.querySelector("button").addEventListener('click', getJson)

function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            let main = '', date = '', output = '';
            data.forEach(function(post) {
                main += `
				<div>
					<h3>${post.title}</h3>
					<p>${post.body}</p>
				</div>
				`;
            });
            console.log(data);
            date = `<p><i><b>Last modified</b>: ${data[0].date}</i></p>`;
            document.querySelector("#output").innerHTML = main + date;
        })
        .catch(err => console.log(err));
}