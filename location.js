const search = () => {
    const searchbox = document.getElementById("search-item").value.toLocaleLowerCase();
    const product = document.getElementsByClassName("product");
    console.log('product',product);
    for (var i = 0; i < product.length; i++) {
            if (product[i].getElementsByClassName("p-city")[0].innerHTML.toLocaleLowerCase().includes(searchbox)) {
                product[i].style.display = "block";
            }
            else {
                product[i].style.display = "none";
            }
        
    }
}