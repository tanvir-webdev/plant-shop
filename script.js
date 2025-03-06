// Utilities
function stringToNumber(id){
    const num = parseFloat(id);
    return num;
}


document.getElementById('product-container').addEventListener('click', function(e){
    const targetElement = e.target.tagName;
    if(targetElement === "BUTTON"){
        const productPrice = e.target.parentNode.children[2].children[1].innerText;
        
    }
})