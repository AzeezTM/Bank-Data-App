
    myData = []
    function Addafter() {
        const name = document.getElementById("name").value;
        const type = document.getElementById("type").value
        const date = document.getElementById("date").value

        let newdata = {
            name, type, date
        }
        console.log(myData)
        myData.push(newdata);
        localStorage.setItem("userinfo", JSON.stringify(myData))
        addtoscreen()
    }


    function addtoscreen() {

        document.getElementById("kunle").innerHTML = "";

        myData.map((value, index) => {
            document.getElementById("kunle").innerHTML += `
        <tr>
          <td>${value.name}</td>
          <td style="width: 350px">${value.type}</td>
          <td>${value.date}</td>
          <td> <button class="btn btn-danger onclick="removeItem(${index})">delete</button> </td>
          </tr> 
          `;
        })
    }
    function removeItem(index) {
        let getUserInfom = localStorage.getItem("userinfo")
        let retUserInfom = JSON.parse(getUserInfom)
        retUserInfom.splice(index, 1)
        localStorage.setItem("userinfo", JSON.stringify(retUserInfom))
        myData = retUserInfom
        console.log(myData)
        addtoscreen();

    }

    function stayonscreen() {
        let getUserInfom = localStorage.getItem("userinfo")
        let retUserInfom = JSON.parse(getUserInfom)
        retUserInfom.map((value, index) => {
            document.getElementById("kunle").innerHTML += `
        <tr>
          <td>${value.name}</td>
          <td style="width: 350px">${value.type}</td>
          <td>${value.date}</td>
          <td> <button class="btn btn-danger onclick="removeitem(${index})">delete</button> </td>
          </tr> 
          `;

        })
    }
    stayonscreen()  
