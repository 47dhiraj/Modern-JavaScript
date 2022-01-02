$( document ).ready(function() {

    // Button with id myBtn
    let fetchBtn = document.getElementById("fetchBtn");
    fetchBtn.addEventListener('click', getData)

    // div with id content 
    let content = document.getElementById("content");


    // Example 1 : GET method from url location
    function getData()
    {
     
        
        url = "https://api.github.com/users";

        fetch(url)
        .then((response)=>{

            return response.json();     // response.json() vannale, server batw data aauda string format ma aaucha teslai parse garera json format ma lageko
        })
        .then((data)=>{     // yo line ma aaune data pani json ko format ma cha because mathi aayeko response lai json ma lageko cha using response.json()
            

            str = "";              

            for (key in data)
            {
                str += `<li>${data[key].login} </li>`;    // Backticks are commonly used for multi-line strings or when you want to interpolate an expression within your string.   // javascript variable ma HTML code lai hold garayera rakheko
                str += `<li>${data[key].id} </li>`;
                str += `<li>${data[key].node_id} </li>`;
                str += `<li>${data[key].avatar_url} </li> <br>`;
            }

            content.innerHTML = str;   

            console.log(data);
        })

    }


  


    // Example 2: POST method

    // Button with id myBtn
    let postBtn = document.getElementById("postBtn");

    postBtn.addEventListener('click', postData)



    function postData()
    {
        url = "http://dummy.restapiexample.com/api/v1/create";

        // data = '{"name":"gedajasto47","salary":"473","age":"26"}'      // hamile json object lai single quote vitra rakheko cha i.e aba chai yo data, string format ko vayo.. yedi single quote ma nrakhi json object ma vako vaye... fetch api ko body ma data pathauda teslai stringify garna parcha .
        data = {"name":"dimaghyang47","salary":"123","age":"23"}

        fetch(url, {
            method:'POST',				/* yo url ma hit hanne method vaneko chai POST method ho vanna khojeko*/
            // headers:{
            //     'Content-type':'application/json',
            // },
            body: JSON.stringify({'data':data})			/* yesarri body ma json object vitra key value pair(i.e 'title':title) pani pathako cha*/
        })
        .then(response=> response.json())
        .then(data => console.log(data))
    }



});













