const  stateArr = {
    '1':'待审批',
    '2':'审批通过',
    '3':'状态未知'
}


export const getStateName = state => stateArr[state]