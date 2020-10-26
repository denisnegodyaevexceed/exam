let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


function aclean(arr) {
    let map = new Map()
    arr.forEach(word => {
        let sorted = word.toLowerCase().split('').sort().join('')
        map.set(sorted, word)
    })

    return Array.from(map.values())
}
alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"