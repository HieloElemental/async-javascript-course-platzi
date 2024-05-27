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
    console.log(view);

  } catch (error) {
    console.error(error);
  }
})();