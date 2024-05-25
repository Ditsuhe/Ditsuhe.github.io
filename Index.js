const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")

function hitlikes1() {
   let totalLikes1:number = parseInt(countLikes1.value) +1
   countLikes1.textcontent = totalLikes1.toString()  
}
btnLike1.addEventListener("click",hitLikes1)
