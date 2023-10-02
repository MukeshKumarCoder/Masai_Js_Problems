
let tbody = document.querySelector("tbody");


async function userData(){
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        let data = await res.json();

        // console.log(data)
        data.forEach(element => {
            let tr = document.createElement("tr");

            let td1 = document.createElement("td");
              td1.innerText = element.userId;

            let td2 = document.createElement("td");
            td2.innerText = element.id;

            let td3 = document.createElement("td");
            td3.innerText = element.title;

            let td4 = document.createElement("td");
            td4.innerText = element.completed;
        
            tr.append(td1, td2, td3, td4);
            tbody.append(tr);

        });
    } catch (error) {
        console.log(error); 
    }
};

userData();

data.array.forEach(element => {
    let tr1 = document.createElement("tr");
    let th1 = document.createElement("th");
      th1.innerText = element.userId;
    let th2 = document.createElement("th");
    th2.innerText = element.id;
    let th3 = document.createElement("th");
    th3.innerText = element.title;
    let th4 = document.createElement("th");
    th4.innerText = element.completed;
    // let td1 = document.createElement("td");
    // let td2 = document.createElement("td");
    // let td3 = document.createElement("td");

    tr1.append(th1, th2, th3, th4);
    root.append(tr1);
});
