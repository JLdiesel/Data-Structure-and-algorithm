function asyncFn() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
  function a(v) {
    return asyncFn().then(() => v);
  }

async function mapReduceLoop(){
    const arr=[1,2,3,4];
    const promises=arr.map(async item=>await a(item))
    const mapResult=await Promise.all(promises)
    return mapResult.reduce((prev,next)=>prev+next)
}
async function main(){
    console.log('start');
   console.log(await mapReduceLoop()); 
   console.log('end');
   }
   main()
