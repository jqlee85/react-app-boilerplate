
// Example merge sort
export const sortArray = (nums) => {
  let i = 1
  let sorted = [nums[0]]
  while (i < nums.length) {
    let current = nums[i]

    let j = 0
    while (j < sorted.length)  {
      
      if (current <= sorted[j]) {
        sorted.splice(j, 0, current)
        break
      } 
      else if (j === sorted.length -1) {
        sorted.push(current)
        break
      }
      j++
    }
    i++
  }
  return sorted
}

/**
 * https://leetcode.com/problems/merge-sorted-array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export const merge = function(nums1, m, nums2, n) {
  
  // Return version (ignores edge cases)
  // let k = 0
  // let i = 0
  // let j = 0
  // let c = []
  // nums1 = nums1.slice(0,m)
  // while (k < m + n) {
  //   if (nums1[i] <= nums2[j]) {
  //     c[k] = nums1[i]
  //     i++
  //   } else{
  //     c[k] = nums2[j]
  //     j++
  //   }
     
  //   k++
  // }
  // return c

  for (let i=0;i<nums2.length;i++){
      for(let j=0;j<nums1.length;j++){
          if (nums2[i]<=nums1[j] || (j === m)){
              nums1.pop()
              nums1.splice(j,0,nums2[i])
              m++
              break
          }
      }
  }
}