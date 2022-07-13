function choice(items) {
    const index = Math.floor(Math.random()*items.length)
    return items[index]

}

function remove (items, item) {
    let index = items.indexOf(item)
    return items.splice(index,1)[0]
}

export {choice, remove}