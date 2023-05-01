const data = require('./language-tree.json')
const process = require('process')

let target = process.argv[2].toLowerCase()
target = target.charAt(0).toUpperCase() + target.slice(1)

function ReadTree ({Node, Children}, target) {
    if (Node.Language && Node.Language.Name.startsWith(target)){
            return Node.Language.Name
        }
    if (Children && Children.length > 0) {
        for (const node of Children) {
            const res = ReadTree(node, target)
            if (res) {
                return (`${Node.Label} ${res}`)
            }
        }
    }

}

console.log(ReadTree(data.Root, target))