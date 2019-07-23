import {sortArray,merge} from './example'

describe('sortArray()', () => {

  it('Correctly sorts input array', () => {

    const input = [5,1,1,2,0,0]
    const expectedOutput = [0,0,1,1,2,5]

    expect(
      sortArray(input)
    ).toEqual(
      expectedOutput
    )

  })

})

describe('merge()', () => {

  it('Correctly merges 2 sorted arrays into an array of ascending order', () => {

    let input1 = [1,2,3,0,0,0]
    const m = 3
    const input2 = [2,5,6]
    const n = 3
    const expectedOutput = [1,2,2,3,5,6]

    expect(
      function(){
        merge(input1,m,input2,n)
        return input1
      }()
    ).toEqual(
      [1,2,2,3,5,6]
    )

  })

})

