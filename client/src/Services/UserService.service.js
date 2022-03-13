
export async function GetByEmail() {
    try {

        return await fetch("")
            .then(res => res.json())
            .catch(() => {})
    }
    catch{
    
    }
}