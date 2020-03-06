class TreeNode {
    constructor(type, value) {
        this.type = type;
        this.value = value;
        this.descendents = [];
    }
}

/**
 * @param string
 * @returns {Array}
 */
function splitWordAndSingleChars(string) {
    return string.split(/(\w+|\S)/g);
}

/**
 * @param element
 * @returns {boolean}
 */
function isValidateElement(element) {
    return /\S/.test(element)
}

function getTreeNodes(elements) {
    let availableLexemes = [
        {
            regEx: /\w+/,
            type: 'word'
        },
        {
            regEx: /AND|\+/,
            type: "and"
        },
        {
            regEx: /OR|\|/,
            type: "and"
        },
        {
            regEx: /NOT|-/,
            type: "and"
        },
        {
            regEx: /[()]/,
            type: "bracket"
        },
        {
            regEx: /"/,
            type: "quote"
        },
        {
            regEx: /\*/,
            type: 'asterix'
        }
    ];
    let traceWindowSize = 5;

    let treeNodes = [];
    let status = 'success';
    let error = '';
    let trace = '';

    elements.forEach((element) => {
        if (status === 'success' && isValidateElement(element)) {
            let numberOfAvailableLexemes = availableLexemes.length;
            for (let index = 0; index < numberOfAvailableLexemes; index++) {
                let lexeme = availableLexemes[index];

                if (lexeme.regEx.test(element)) {
                    treeNodes.push(new TreeNode(lexeme.type, element));
                    break;
                }
                if (index === numberOfAvailableLexemes - 1) {
                    status = 'Error';
                    error = 'Invalid element: "' + element + '"';
                    trace = elements.slice(index - traceWindowSize, index + traceWindowSize).join('');
                    break;
                }
            }
        }
    });

    return {
        treeNodes: treeNodes,
        status: status,
        error: error,
        trace: trace
    }
}

function buildNodeTree(node, treeNodes) {
    treeNodes.forEach((treeNode) => {
        if (treeNode.type === 'word') {
            node.descendents.push(treeNode);
        } else if (treeNode.type === 'quote') {
            // pass
        }
    });

    return node;
}

// let keyword = 'tender||donor "tender""donor" "sds"sdsdsd"dsd" test"s"sdsd -a-a "donor^" "*donor" "donor*" "^donor" "~sdsd" "<sdsd" "sd\sd" ","';
let keyword = 'tender|donor "tender""donor" ^ "sds"sdsdsd"dsd" test"s"sdsd -a-a "donor" "*donor" "donor*" "donor" "sdsd" "sdsd" "sdd" ""';

let elements = splitWordAndSingleChars(keyword);
let result = getTreeNodes(elements);
// if (result.status === 'success') {
//     let mainNode = new TreeNode('Start','');
//     let tree = buildNodeTree(mainNode, result.treeNodes);
//     console.log(tree);
// }

// console.log(elements);
console.log(result);
