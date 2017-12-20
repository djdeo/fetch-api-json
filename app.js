document.querySelector("button").addEventListener('click', getJson)

function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.forEach(function(post) {
                output += `
				<div>
					<h3>${post.title}</h3>
					<p>${post.body}</p>
				</div>
				`;
            });
            document.querySelector("#output").innerHTML = output;
        })
        .catch(err => console.log(err));
}