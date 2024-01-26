
const ethers=require("ethers")

const {  factoraddress,
    routeraddress,
    fromAddress,
    toaddress,
    ethaddress}=require("./address")

    const  { erc20ABI, factoryABI, pairABI, routerABI}=require("./Abi")

  
    const provider = new ethers.providers.JsonRpcProvider(
        "https://bsc-dataseed1.binance.org/"
    )
    


    const factoryInstance = new ethers.Contract(

        factoraddress,factoryABI, provider  
    )

    // console.log(factoryInstance)


    const routerInstance=new ethers.Contract(
   
        routeraddress,routerABI ,provider
        )

        // console.log(routerInstance)


        const priceFetch=async(humanFormat)=>{
            const token1 = new ethers.Contract(
                fromAddress,erc20ABI,provider
            )
            const token2 = new ethers.Contract(
                toaddress,erc20ABI,provider
            )
            const decimal1= await token1.decimals()
            const decimal2= await token2.decimals()
            console.log(decimal1)
            console.log(decimal2)
            const amountIn = ethers.utils.parseUnits(humanFormat,decimal1).toString();
            const amountsOut = await routerInstance.getAmountsOut(amountIn,[
              fromAddress,
              toaddress,
            ])
            console.log(amountIn)
            console.log(amountsOut.toString())
            const humanOutput = ethers.utils.formatUnits(
              amountsOut[1].toString(),
              decimal2
            )
            console.log("This the number of WBNB: ",humanOutput)
          }
          humanFormat="1000"
          priceFetch(humanFormat)