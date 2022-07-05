const posts=[
    {title:'Post one',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post two',body:'This is post two',createdAt:new Date().getTime()}

];
let intervalid=0;
function getPosts(){
    clearInterval(intervalid)

    intervalid=setTimeout(()=>{
        let output='';
        posts.forEach((posts,index)=>{
            output+=`<li>${posts.title}- last updated ${(new Date().getTime()-posts.createdAt)/1000} seconds ago</li>`;

        });document.body.innerHTML=output;
    },1000);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error:Something went wrong');
            }
            
        },);
    });}
    function deletePost(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                    while(posts.length>=0){
                posts.pop(posts.length-1);}}
              
          
            )
                const error1=true;
                
                if(!error1){
                    resolve();
                }else{
                    reject('Error:Array is Empty now')
                }

            },1000);
        }
        const user={
            lastactivitytime: (new Date().getTime()-posts[0].createdAt)/1000,
        }
   
    function updateLastUserActivityTime() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                    
                resolve(user.lastactivitytime)
            },1000)

        })
    }
    function userupdatesapost(){
        Promise.all([createPost,updateLastUserActivityTime]).then(([createPostresolves,updateLastUserActivityTimeresolves])=>{for(let i=0;i<posts.length;i++){console.log(posts[i])}}).then(()=>console.log(`${user.lastactivitytime} seconds ago`)).then(deletePost())
       
    }
   
    userupdatesapost()

   
  