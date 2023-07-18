var productNameInput=document.getElementById('productName');
var productPriceInput=document.getElementById('productPrice');
var productCategoryInput=document.getElementById('productCategory');
var productDescInput=document.getElementById('productDesc');
var productcontainer=[];
function addproduct(){
var product={
    name:productNameInput.value,
    price:productPriceInput.value,
    cat:productCategoryInput.value,
    desc:productDescInput.value,
}
clearForm();
productcontainer.push(product);
console.log(productcontainer);
displayproduct()
}
function displayproduct(){
    var box=' ';
    for(var i=0 ; i<productcontainer.length;i++){
        box+=`   <tr>
        <td>${i+1}</td>
        <td>${productcontainer[i].name}</td>
        <td>${productcontainer[i].price}</td>
        <td>${productcontainer[i].cat}</td>
        <td>${productcontainer[i].desc}</td>
       
        <td><button onclick="deletProduct(${i});" class="btn btn-outline-warning">delet</button></td>
        <td><button class="btn btn-outline-danger">update</button></td>
      </tr>`
    }
    document.getElementById('tablebody').innerHTML=box;
}
function clearForm(){
    productNameInput.value=" ";
productPriceInput.value=' ';
productCategoryInput.value=" ";
productDescInput.value =" ";
}
function deletProduct(productIndex){
    productcontainer.splice(productIndex,1);
   displayproduct();
}
