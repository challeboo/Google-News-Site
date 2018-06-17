let fruits = ['apple', 'kiwi', 'orange', 'pineapple']
fruits.forEach((frukt) => {
  console.log(frukt);
}
)
fruits.push("Lemon");
console.log(fruits);

const fruit1 = {
name: "Dragonfruit",
isSour: false,
rating: 7
}
const fruit2 = {
name: "Lime",
isSour: true,
rating: 4
}
const fruit3 = {
name: "grape",
isSour: false,
rating: 8
}

const fruitArray = [fruit1, fruit2, fruit3]

fruitArray.forEach((frukt, index) => {
  if(frukt.rating >= 8 ) (
console.log(frukt.name, index)
)
})

const stringer = (string) => {
const letter = string.charAt(6)
  return letter.toUpperCase()
}
