(function () {
  let arr = document.getElementsByTagName("img");
  let copy = [...arr];
  let filtered = copy
    .filter((img) => img.src.includes("download/file.php?id"))
    .map((img) => ({
      src: img.src.replace("&t=1", ""),
      alt: img.alt,
    }));
  console.log(filtered);
})();
