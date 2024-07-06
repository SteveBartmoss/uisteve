

export function tokenDecorator(token){
    const labelClose= /<\/[a-zA-Z][a-zA-Z0-9\-]*>/
    const labelOpen= /<[a-zA-Z][a-zA-Z0-9\-]*/
    const reservedWords=['className','id','onClick','children'];
    const operators=['+','-','=','*','&','%']
    const codeDividers=['[',']','{','}','(',')']

    let decoredToken
    let tokenType

    if(token === '>'){
        decoredToken={
            rawToken: token,
            typeToken: 'label'
        }
        return decoredToken
    }

    else if(labelClose.test(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'label'
        }
        return decoredToken
    }

    else if(labelOpen.test(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'label'
        }
        return decoredToken
    }

    else if(operators.includes(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'operator'
        }
        return decoredToken
    }

    else if(codeDividers.includes(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'divider'
        }
        return decoredToken
    }

    else if(reservedWords.includes(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'reservedWord'
        }
        return decoredToken
    }
    
    else{
        decoredToken={
            rawToken: token,
            typeToken: 'text'
        }
        return decoredToken
    }

    return{
        rawToken: token,
        typeToken: 
    }

}