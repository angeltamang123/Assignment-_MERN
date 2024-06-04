const arr = ['kaylin', 'ram', 'gopal', 'ankit']

const userDetails = {
    'kaylin': 'khanal',
    'alisha': 'rauniyar',
    'ayush': 'rai',
    'gopal': 'tharu'
}

const newUserDetails= arr.map((item,id)=>{
    if(userDetails[item])
        {
            return item+" "+userDetails[item];
        }
}).filter(item=>item)

console.log(newUserDetails)
// expected output :
// ['kaylin khanal', 'gopal tharu']