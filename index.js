// code your solution here
function saturdayFun(event = 'roller-skate'){
    return `This Saturday, I want to ${event}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(value = '*'){
    return function(parameter = 'special'){
        return `You are ${value}${parameter}${value}!`
    }
}