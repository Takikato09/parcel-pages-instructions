
//more images
// const img = document.createElement('img');
// document.body.append(img);

const imgUrls=[
    new URL('./img/poop.jpg', import.meta.url),
    new URL('./img/skull.jpg', import.meta.url),
    new URL('./img/toilet2.jpg', import.meta.url)
]
for (const el of imgUrls) {
    const img = document.createElement('img');
    document.body.append(img);
    img.src = el.toString();
 }