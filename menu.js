var starters = dishes.filter((dish) => dish.course === 'Starters');
var entrees = dishes.filter((dish) => dish.course === 'Entrees');
var desserts = dishes.filter((dish) => dish.course === 'Desserts');



const menuContent = document.getElementById("menuContent")
const starterBtn = document.getElementById("starterBtn")
const desertBtn = document.getElementById("dessertsBtn")
const entreesBtn = document.getElementById("entreesBtn")



starterBtn.addEventListener("click", () => {
    menuContent.innerHTML =
        starters.map((dish) => {
            const starterLists = ` 
            <ul> class = "starters"
                <li>
                     img src = "${dish.imageURL}"/>
                    <h1> ${ dish.title} </h1> 
                    <h3>${ dish.discription}</h3>
                     <h3>${ dish.price }</h3> 
                  <li>
             </ul>`


            menuContent.insertAdjacentHTML("beforeend", starterLists)

        })

})

entreesBtn.addEventListener("click", () => {
    menuContent.innerHTML =
        entrees.map((dish) => {
            const entreesLists = ` 
            <ul> class = "entrees"
                <li>
                     img src = "${dish.imageURL}"/>
                    <h1> ${ dish.title} </h1> 
                    <h3>${ dish.discription}</h3>
                     <h3>${ dish.price }</h3> 
                  <li>
             </ul>`


            menuContent.insertAdjacentHTML("beforeend", entreesLists)

        })

})

dessertsBtn.addEventListener("click", () => {
    menuContent.innerHTML =
        desserts.map((dish) => {
            const dessertsLists = ` 
            <ul> class = "desserts"
                <li>
                     img src = "${dish.imageURL}"/>
                    <h1> ${ dish.title} </h1> 
                    <h3>${ dish.discription}</h3>
                     <h3>${ dish.price }</h3> 
                  <li>
             </ul>`


            menuContent.insertAdjacentHTML("beforeend", dessertsLists)

        })

})
