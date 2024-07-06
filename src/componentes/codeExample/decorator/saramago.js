

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

    if(labelClose.test(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'label'
        }
        return decoredToken
    }

    if(labelOpen.test(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'label'
        }
        return decoredToken
    }

    if(operators.includes(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'operator'
        }
        return decoredToken
    }

    if(codeDividers.includes(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'divider'
        }
        return decoredToken
    }

    if(reservedWords.includes(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'reservedWord'
        }
        return decoredToken
    }else{
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