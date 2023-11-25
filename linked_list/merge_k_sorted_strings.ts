class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoList(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let dummy: ListNode | null = new ListNode()
  let temp = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = l1
      l1 = l1.next
    } else {
      temp.next = l2
      l2 = l2.next
    }
    temp = temp.next
  }
  temp.next = l1 || l2
  return dummy.next
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null
  while (lists.length > 1) {
    let mergedList: Array<ListNode | null> = []
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i]
      let l2
      if (i + 1 > lists.length) l2 = null
      else l2 = lists[i + 1]

      let tempList = mergeTwoList(l1, l2)
      mergedList.push(tempList)
    }
    lists = mergedList
  }
  return lists[0] || null
}
