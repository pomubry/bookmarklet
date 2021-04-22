(function () {
  let arr = document.getElementsByTagName("img");
  let copy = [...arr];
  let sources = copy.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));
  console.log(sources);
})();
