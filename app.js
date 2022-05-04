const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchedTitle = form.elements.query.value;
    const config = {params: {q: searchedTitle}}
    const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows`, config)
    console.log(res);
    const img = document.createElement('IMG');
    img.src = res.data.image.medium;
    document.body.append(img);
})
