// async await 

async function fetchData(){
    try{
        const res = await fetch('http://localhost:8000/planets')
        const data =  await res.json()
        return data
    }catch(error){
        console.log('Error fetching data ... ', error);
        throw new Error()
    }   
}