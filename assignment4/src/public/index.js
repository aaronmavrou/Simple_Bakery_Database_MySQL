function getAllProducts() {
    
    const url = 'http://localhost:4300/tasks';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var myTable = '<table id = "myTableId"><tr><th>Product Name</th><th>Price</th></tr>';
            for (i = 0; i < data.length; i++) {
                myTable += "<tr><td>" +  makeTextNode(document.createTextNode(data[i].productName)) + "</td><td>"
                    + makeTextNode(document.createTextNode(data[i].productPrice)) + "</td>"
            }
            document.getElementById("basket").innerHTML = myTable;
        })
}

function getAllAddons() {
    
    const url = 'http://localhost:4300/addons';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var myTable = '<table id = "myTableId"><tr><th>Add-On Name</th><th>Add-On Price</th></tr>';
            for (i = 0; i < data.length; i++) {
                myTable += "<tr><td>" +  makeTextNode(document.createTextNode(data[i].addOnName)) + "</td><td>"
                    + makeTextNode(document.createTextNode(data[i].addONPrice)) + "</td>"
            }
            document.getElementById("basket").innerHTML = myTable;
        })
}

function makeTextNode(theItem) {
    var a = document.createElement("div");
    a.appendChild(theItem);
    return a.innerHTML;
}

function lookUp() {
    var a = document.getElementById("itemInput").value;
    
    const url = 'http://localhost:4300/tasks/1';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data);
            alert(data[0].productName);
            alert(data.length)
            document.getElementById("basket").innerHTML = data[0].productName;
        })
}

function viewAllVanilla() {
  
    const url = 'http://localhost:4300/vanilla';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var myTable = '<table id = "myTableId"><tr><th>Vanilla</th><th>Product Name</th><th>';
            for (i = 0; i < data.length; i++) {
                myTable += "<tr><td>" + makeTextNode(document.createTextNode(data[i].ingredientName))
                    + "</td><td>" + makeTextNode(document.createTextNode(data[i].productName)) + "</td><td>"

            }
            document.getElementById("basket").innerHTML = myTable;
        })
}


function viewCustomers500() {
   
    const url = 'http://localhost:4300/customer500';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var myTable = '<table id = "myTableId"><tr><th>Customer</th><th>Total Spent</th><th>';
            for (i = 0; i < data.length; i++) {
                myTable += "<tr><td>" + makeTextNode(document.createTextNode(data[i].customerName))
                    + "</td><td>" + makeTextNode(document.createTextNode(data[i].total)) + "</td><td>"


            }
            document.getElementById("basket").innerHTML = myTable;
        })
}
function customersWithAddOns() {
   
    const url = 'http://localhost:4300/customerAddon';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var myTable = '<table id = "myTableId"><tr><th>Customer</th><th></th><th>AddOnID</th><th>';
            for (i = 0; i < data.length; i++) {
                myTable += "<tr><td>" + makeTextNode(document.createTextNode(data[i].customerName))
                    + "</td><td>" + makeTextNode(document.createTextNode(data[i].addOnID)) + "</td><td>"


            }
            document.getElementById("basket").innerHTML = myTable;
        })
}
function ratings() {
    
    const url = 'http://localhost:4300/productRatings';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var myTable = '<table id = "myTableId"><tr><th>Product</th><th></th><th>Rating</th><th>';
            for (i = 0; i < data.length; i++) {
                myTable += "<tr><td>" + makeTextNode(document.createTextNode(data[i].productName))
                    + "</td><td>" + makeTextNode(document.createTextNode(data[i].rating)) + "</td><td>"


            }
            document.getElementById("basket").innerHTML = myTable;
        })
}
function averageRatings() {
   
    const url = 'http://localhost:4300/averageRatings';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var myTable = '<table id = "myTableId"><tr><th>Product</th><th></th><th>Rating</th><th>';
            for (i = 0; i < data.length; i++) {
                myTable += "<tr><td>" + makeTextNode(document.createTextNode(data[i].productName))
                    + "</td><td>" + makeTextNode(document.createTextNode(data[i].AverageRating)) + "</td><td>"


            }
            document.getElementById("basket").innerHTML = myTable;
        })
}

function christmasProducts() {
    
    const url = 'http://localhost:4300/christmas';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var myTable = '<table id = "myTableId"><tr><th>Product</th><th></th><th>Date</th><th>';
            for (i = 0; i < data.length; i++) {
                myTable += "<tr><td>" + makeTextNode(document.createTextNode(data[i].productName))
                    + "</td><td>" + makeTextNode(document.createTextNode(data[i].purchaseDate)) + "</td><td>"


            }
            document.getElementById("basket").innerHTML = myTable;
        })
}

function logout() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("mavsbutton").innerHTML = "Log Out";
    } else {
        x.style.display = "none";
        document.getElementById("mavsbutton").innerHTML = "Login";
    }
}


var idItem;


function deleteReview() {
    var a = document.getElementById("itemInput").value;
        
                    var url2 = 'http://localhost:4300/delete/' + a;


                    let fetchdata = {
                        method: 'DELETE',
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    }

                    fetch(url2, fetchdata)
                        .then(res=> res.json())
                        .then(response => console.log('Success:', JSON.stringify(response)))
                        .catch(error => console.error('Error', error));
}

function deleteProduct() {
    var p = document.getElementById("productInput").value;
        
                    var url3 = 'http://localhost:4300/deleteprod/' + p;

                    let fetchdata = {
                        method: 'DELETE',
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    }

                    fetch(url3, fetchdata)
                        .then(res=> res.json())
                        .then(response => {
                            alert("Error: Cannot delete product because it is included in one or more purchases! Sorry!");
                            console.log('Error:', JSON.stringify(response));

                        }
                        )
                        .catch(error => console.error('Error:', error));
}

function getReviews(){


    const url = 'http://localhost:4300/AllReview';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var myTable = '<table id = "myTableId"><tr><th>Review ID</th><th>Rating</th><th>Comment</th><th>Date</th>>';
            for (i = 0; i < data.length; i++) {
                myTable += "<tr><td>" + makeTextNode(document.createTextNode(data[i].reviewID))
                    + "</td><td>" + makeTextNode(document.createTextNode(data[i].rating)) + "</td><td>" 
                    +   makeTextNode(document.createTextNode(data[i].reviewComment)) + "</td><td>" 
                    +   makeTextNode(document.createTextNode(data[i].dateOfReview)) + "</td></td>"  
            }
            document.getElementById("basket").innerHTML = myTable;
        })

    }