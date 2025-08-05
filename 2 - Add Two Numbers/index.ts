/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/** PROBLEM -> https://leetcode.com/problems/add-two-numbers/description/ **/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sumRest:number = 0 // oq restou a ultima soma
    let lastNode: ListNode | undefined;
    let sumVector:number[] = [] // vetor separando o numero da soma

    do {
        let num1 = l1 ? l1.val : 0
        let num2 = l2 ? l2.val : 0
        let sum = num1  + num2 + sumRest;
        let sumString = sum.toString()
        sumRest = 0

        if(sumString.length > 1){
            sum = Number(sumString.charAt(1))
            sumRest = Number(sumString.charAt(0))
        }

        sumVector.push(sum)

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    } while (l1 || l2 || sumRest !== 0)

    for (let i = sumVector.length - 1; i >= 0; i--) { // para criar a lista na ordem certa
        lastNode  = new ListNode(sumVector[i], lastNode)
    }

    return lastNode;
};

function createListNode(list: number[]): ListNode | null {
    let lastNode: ListNode | undefined;

    list.map(val => {
        lastNode  = new ListNode(val, lastNode)
    })

    return lastNode
}

/*** O código abaixo deve ser omitido o enviar para o leetcode **/
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function printListNode(listNode: ListNode):void {
    console.log("=== LIST NODE ====")
    do {
        console.log(listNode.val)
        listNode = listNode.next
    } while (listNode)
    console.log("\n")
}

function addTwoNumbersTest(l1: number[], l2: number[]): ListNode | null{
    let listNode1:ListNode = createListNode(l1)
    let listNode2:ListNode = createListNode(l2)
    let res:ListNode | undefined;

    let startTime = performance.now();
    res = addTwoNumbers(listNode1, listNode2)
    let endTime = performance.now();
    let timeElapsed = endTime - startTime; // quanto tempo demorou a chamda da função

    console.log(`Tempo de execução: ${timeElapsed} ms`);

    return res
}

printListNode(addTwoNumbersTest([2,4,3], [5,6,4]))
printListNode(addTwoNumbersTest([0], [0]))
printListNode(addTwoNumbersTest([9,9,9,9,9,9,9], [9,9,9,9]))