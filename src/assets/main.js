const API = 'https://github-repos.p.rapidapi.com/search?user=HieloElemental';
const contentElement = document.getElementById("content");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dedbe1ea44msh4821c40274e312ap1a3526jsn20da525a41be',
		'X-RapidAPI-Host': 'github-repos.p.rapidapi.com'
	}
};

const fetchData = async (urlApi) => {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
} 

(async () => {
  try {
    const repos = await fetchData(API);
    let view = `
    ${repos.repositories.map(repo => `
      <a href="${repo.url}" class="w-72 bg-white border rounded-lg border-gray-300 p-5 shadow hover:bg-gray-100 delay-100 duration-200">
        <!-- Header -->
        <div class="flex flex-row">
          <img src="
          ${repo.language === "JavaScript" ? "https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/javascript/javascript.png" :
          repo.language === "Java" ? "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/java/java.png" :
          repo.language === "CSS" ? "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png" :
          repo.language === "HTML" ? "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" :
          "https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/github/github.png"}
          " class="rounded w-10 h-10" />
          <p class="line-clamp-2 ml-3 text-gray-300 font-semibold">
            <span class="text-gray-500 font-semibold">HieloElemental/</span>
            <span class="text-clip text-gray-300 font-semibold">${repo.name}</span>
          </p>
        </div>

        <!-- Content -->
        <p class="text-xs text-gray-500 mt-3">
          ${repo.description}
        </p>
      </a>
      `).reverse().slice(0, 12).join('')}
    `;

    contentElement.innerHTML = view;
  } catch (error) {
    console.error(error);
    content.innerHTML = `
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" id="load-error">
        <strong class="font-bold">Holy smokes!</strong>
        <br/>
        <span class="block sm:inline">Something seriously bad happened. <br/> ${error}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg onclick="() => document.getElementById("load-error").remove()" class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    `
  }
})();