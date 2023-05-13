const person = {
    name : 'Jai',
    address :  {
        city:'Hyderabad',
        state:'Telangana'
    },
    profiles : ['twitter','linkedin'],
    printProfile : () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
    }
}


export default function LearningJavaScript() {

    return (
        <div>
        <div>{person.name}</div>
        <div>{person.address.city}</div>
        <div>{person.printProfile()}</div>
        </div>
    )
    
}