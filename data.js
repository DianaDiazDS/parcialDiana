const data = {
  "tasks":{
    "one":{
      "task":"Learning Javascript",
      "state":true,
      "end":"2020/10/21"
    },
    "two":{
      "task":"Reader Book Clean Code",
      "state":false,
      "end":"2023/12/31"
    },
    "three":{
      "task":"Running",
      "state":false,
      "end":"2023/06/25"
    },
    "four":{
      "task":"Pass the Evaluation",
      "state":false,
      "end":"2023/11/09"
    },
    "five":{
      "task":"Go to Karaoke",
      "state":true,
      "end":"2022/08/25"
    },
    "six":{
      "task":"Finish watching the serie",
      "state":false,
      "end":"2023/12/31"
    },
    "seven":{
      "task":"Controll Weight",
      "state":false,
      "end":"2020/11/22"
    }
  }
}


const tareas2 = document.getElementById('tareas')
const completa = document.getElementById('tareascumplida')
const mymap = new Map(Object.entries(data))
2


// console.log(mymap)
for (const [k, v] of mymap) {
    console.log(`${k}-->${v}`)
    const tareas = new Map(Object.entries(v))

    tareas.forEach(element => {
        tareas2.append(new Option(element.task))
    })

    const prueba = tareas.filter(tare => tare.state==false)

    prueba.forEach(tare => {
        completa.append(new Option(tare.task))
    })
}




