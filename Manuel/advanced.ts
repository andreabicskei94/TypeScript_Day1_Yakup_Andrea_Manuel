const targetDiv = (document.getElementById("main-content") as HTMLElement);
const targetBell = (document.getElementById("nav-bell") as HTMLElement);

const myArr: {dishName?: string, image?: string, description?:string, taste?: number}[] = [{
        dishName: "Dish",
        image: "food-712665_1920.jpg",
        description: "Its a dish.",
        taste: 2
    },{
        dishName: "Dish",
        image: "food-712665_1920.jpg",
        description: "Its a dish.",
        taste: 2
    },{
        dishName: "Dish",
        image: "food-712665_1920.jpg",
        description: "Its a dish.",
        taste: 2
    },{
        dishName: "Dish",
        image: "food-712665_1920.jpg",
        description: "Its a dish.",
        taste: 2
    },{
        dishName: "Dish",
        image: "food-712665_1920.jpg",
        description: "Its a dish.",
        taste: 2
    },{
        dishName: "Dish",
        image: "food-712665_1920.jpg",
        description: "Its a dish.",
        taste: 2
    }
]
// myArr[myArr.length-1].taste = 3;
// console.log(myArr[myArr.length-1]);

function buildHTML(arr: any[]){
    targetDiv.innerHTML = "";
    arr.forEach(function(e){
        let color: string = "success";
        if(e.importance > 3){color = "danger";}
        else if(e.importance > 1){color = "warning";}
        targetDiv.innerHTML += `
        <div class="col col-sort">
            <div class="card card-body card-deco">
                <div class="card-text pb-2 d-flex justify-content-between">
                    <span class="badge bg-info">Task</span>
                    <div class="card-bookmark">
                        <a href="#" class="deco-none"><i class="fa-regular fa-bookmark"></i></a>
                        <a href="#" class="deco-none"><i class="fa-solid fa-ellipsis-vertical ms-3"></i></a>
                    </div>
                </div>
                <img src="${e.image}" alt="" class="card-img img-thumbnail">
                <div class="text-center py-2">
                    <h5 class="card-title">${e.dishName}</h5>
                    <p class="card-text card-description">${e.description}</p>
                </div>
                <div class="card-text border-top border-bottom py-3">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>Priority level:</span>
                    <button class="btn btn-${color} btn-sm btn-importance">${e.taste}</button>
                </div>
                <div class="d-flex justify-content-end gap-2 mt-3">
                    <button class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button>
                    <button class="btn btn-success"><i class="fa-regular fa-circle-check"></i> Done</button>
                </div>
            </div>
        </div>
    `;
    });
    
    targetBell.innerHTML = "";
    targetBell.innerHTML += `
        <i class="fa-solid fa-bell fa-lg text-white"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${arr.length}
        </span>
    `;
}

buildHTML(myArr);